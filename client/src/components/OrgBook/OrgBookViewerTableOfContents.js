import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { theme, mq } from "../../constants/theme";
import { useTranslation } from "react-i18next";
import { WhiteSpace } from "antd-mobile";
import GTM from "../../constants/gtm-tags";

const { colors, typography } = theme;
const { white, black, lightGray, mediumGray } = colors;

const MainNavigationContainer = styled.div`
  color: ${black};
  overflow-y: auto;
  height: 600px;
  scroll-behavior: smooth;
  scrollbar-color: light;
  padding: 1.4rem 1.4rem 3.4rem 1.4rem;
`;

const PageListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 4vh;
  margin: 1.4rem 1.4rem 2.4rem 6.4rem;
  cursor: pointer;
  :hover {
    background-color: ${lightGray};
    color: ${black};
  }
`;

export const Background = styled.div`
  width: 95%;
  background-color: ${mediumGray};
`;

const OrgBookViewerTableOfContents = (props) => {
  const {
    organisation,
    filteredOrgBookPages,
    selectPage,
    preSelectedPage,
  } = props;
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState(preSelectedPage || null);
  const [sortedFilteredOrgBookPages, setSortedFilteredOrgBookPages] = useState(
    null,
  );

  const initialize = () => {
    //sort ascending pageGroupNumber, then descending by create_at date
    const sortedPages = filteredOrgBookPages.sort(
      (a, b) =>
        a.pageGroupNumber - b.pageGroupNumber ||
        Date.parse(b.created_at) - Date.parse(a.created_at),
    );
    setSortedFilteredOrgBookPages(sortedPages);
    if (preSelectedPage) {
      setSelectedPage(preSelectedPage);
      selectPage(preSelectedPage);
    }
  };

  useEffect(initialize, []);

  const handlePageClick = (e, page) => {
    e.persist();
    e.stopPropagation();
    setSelectedPage(page);
    selectPage(page);
  };

  const isSelectedPage = (page) => {
    return selectedPage
      ? Object.keys(selectedPage).every((p) => selectedPage[p] === page[p])
      : false;
  };

  return (
    sortedFilteredOrgBookPages && (
      <MainNavigationContainer>
        <WhiteSpace />
        {sortedFilteredOrgBookPages.map((page, idx) => (
          <PageListContainer
            key={idx}
            selected={isSelectedPage(page)}
            onClick={(e) => {
              handlePageClick(e, page);
            }}
            id={GTM.orgBook.prefix + GTM.orgBook.pageContainer + idx}
          >
            {page.name}
          </PageListContainer>
        ))}
      </MainNavigationContainer>
    )
  );
};

export default OrgBookViewerTableOfContents;
