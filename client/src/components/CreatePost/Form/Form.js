import React, { useContext, useEffect, useState } from "react";
import First from "./FirstSection";
import Second from "./SecondSection";
import Third from "./ThirdSection";
import { CreatePostContext } from "components/CreatePost/CreatePost";
import { Footer, Submit } from "components/CreatePost/StyledModal";
import createPostSettings from "assets/data/createPostSettings";
import axios from "axios";
import { formDataToPost } from "assets/data/formToPostMappings";
import GTM from "constants/gtm-tags";
// import { errorStyles } from "components/OrganisationProfile/CreateProfileComponents";

const { shareWith, expires, helpTypes } = createPostSettings;

const errorMsg = {
  title: "Please include a title for your post.",
  description: "Please include a description for your post.",
  // help: "Please select a type of help.",
  tags: "Please add at least one tag.",
};

const initialState = {
  formData: {
    title: "",
    description: "",
    tags: [],
    shareWith: shareWith.default.value,
    expires: expires.default.value,
    help: helpTypes.default.value,
  },
  errors: [],
  postForm: false,
};

const Form = ({ setCurrentStep, textData, type, setPostId, gtmPrefix }) => {
  const { form } = useContext(CreatePostContext);
  const [formData, setFormData] = useState(initialState.formData);
  const [errors, setErrors] = useState(() => {
    const newErrors = [];
    for (let field in errorMsg) {
      newErrors.push(field);
    }
    return newErrors;
  });
  const [postForm, setPostForm] = useState(initialState.postForm);
  formData.help = type;

  const handleFormData = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors.includes(field) && formData[field]) {
      const newErrors = errors.filter((error) => error !== field);
      setErrors(newErrors);
    }
  };

  const handleTagData = (field) => {
    setFormData({ ...formData, [field]: "tags" });
    if (errors.includes(field) && formData[field]) {
      const newErrors = errors.filter((error) => error !== field);
      setErrors(newErrors);
    }
  };

  const handleSelectorChange = (field, val) => {
    setFormData({ ...formData, [field]: val });
  };

  const cleanForm = () => setFormData(initialState.formData);

  const renderError = (field) => {
    if (errors.includes(field) && (!formData[field] || !formData[field].length))
      return errorMsg[field];
  };

  const addTag = (tag) => (e) => {
    handleTagData("tags");
    const hasTag = formData.tags.includes(tag);
    if (hasTag) {
      const tags = formData.tags.filter((t) => t !== tag);
      setFormData({ ...formData, tags });
    } else {
      setFormData({ ...formData, tags: [...formData.tags, tag] });
    }
  };

  const handleSubmit = async (e) => {
    setPostForm(true);
    e.preventDefault();
    const payload = formDataToPost(formData);
    if (form.organisationId) payload.organisationId = form.organisationId;
    if (!errors.length) {
      try {
        const res = await axios.post("/api/posts", payload);
        setPostId(res.data._id);
        cleanForm();
        setPostForm(false);
        setCurrentStep(4);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <First
        onChangeTitle={handleFormData("title")}
        onChangeDescription={handleFormData("description")}
        formData={formData}
        post={postForm}
        renderError={renderError}
      />
      <Second
        addTag={addTag}
        selectedTags={formData.tags}
        renderError={renderError}
        post={postForm}
        title={textData.question}
      />
      <Third
        formData={formData}
        onShareWithChange={(val) => handleSelectorChange("shareWith", val)}
        onExpirationChange={(val) => handleSelectorChange("expires", val)}
      />
      <Footer>
        <Submit
          primary="true"
          onClick={handleSubmit}
          id={gtmPrefix + GTM.post.button}
        >
          Post
        </Submit>
      </Footer>
    </>
  );
};

export default Form;
