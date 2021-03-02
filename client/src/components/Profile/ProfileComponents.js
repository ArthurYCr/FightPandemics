import { Drawer } from "antd";
import styled from "styled-components";

import Heading from "../Typography/Heading";
import SvgIcon from "../Icon/SvgIcon";
import TextLabel from "components/Typography/TextLabel";
import { mq, theme } from "../../constants/theme";

const { colors } = theme;

export const CustomDrawer = styled(Drawer)`
  .ant-drawer-content {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .ant-drawer-body {
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

export const DrawerHeader = styled.div`
  margin: 2rem 0;
  a[href] {
    color: ${colors.black};
    font-size: 1.7rem;
    display: block;
  }
`;

export const SectionHeader = styled(Heading)`
  &.ant-typography {
    display: flex;
    align-items: center;
    color: ${colors.darkGray};
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;
    background: transparent;

    @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
      background: ${colors.ghostWhite};
    }
  }
`;

export const CreatePostIcon = styled(SvgIcon)`
  position: fixed;
  bottom: 3rem;
  right: 2rem;
  height: 5rem;
  width: 5rem;
  z-index: 1;
  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    display: none;
  }
`;
export const CreatePostDiv = styled.div`
  display: none;
  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    color: ${colors.black};
    display: initial;
    margin-right: 1rem;
  }
`;

export const SocialIcon = styled(SvgIcon)`
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  margin-right: 1.6rem;
  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    margin-top: 1rem;
    width: 3rem;
    height: 3rem;
  }
`;

export const NameDiv = styled(TextLabel)`
  display: flex;
  width: 100%;
  align-self: flex-start;
  overflow-wrap: break-word;
  padding-left: 16rem;
  justify-content: space-between;

  &.ant-typography {
    font-size: 2.6rem;
    font-weight: bold;
  }

  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    padding: 0;
    margin-top: 2rem;
    flex-direction: column;
  }

  .name-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .address-container {
    color: #939393;
    font-weight: 400;
    margin-top: auto;
    font-size: 1.4rem;
    line-height: 1.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: calc(100% - 1.6rem);

    img {
      margin-right: 0.8rem;
    }
  }
`;

export const NamePara = styled.p`
  overflow-wrap: break-word;
  margin: 0 !important;
  text-align: left;
  max-width: 70%;
  margin-top: 1rem;
  font-family: Poppins;
  font-weight: bold;
  font-style: normal;
  font-size: 2.7rem;
  line-height: 3rem;
  color: #282828;

  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    padding: 0;
    overflow-wrap: break-word;
    margin: 0 !important;
    text-align: left;
    max-width: 90%;
    margin-top: 1rem;
    font-family: Poppins;
    font-weight: 700;
    font-style: normal;
    font-size: 1.9rem;
    line-height: 1.9rem;
    letter-spacing: 0.05rem;
  }
`;

export const EditIcon = styled(SvgIcon)`
  color: ${colors.royalBlue};
  align-self: flex-end;
  position: absolute;
  right: 2.8rem;
  top: 2.4rem;
`;

export const ProfileBackgroup = styled.div`
  background-color: ${colors.royalBlue};
  position: absolute;
  top: 6rem;
  left: 0;
  width: 100vw;
  height: 21rem;
  z-index: 0;
  border-radius: 0px 0px 6rem 0px;
`;

export const ProfileLayout = styled.div`
  background-color: ${colors.offWhite};
  max-height: 100%;
  z-index: 1;
  max-width: 80rem;
  padding: 0;
  margin-top: 12.1rem;
  width: 100vw;
  border-radius: 0.8rem;
  margin-bottom: 4rem;

  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    background-color: #f6f7fb;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  ${(props) => (props.inCard ? `padding-bottom: 2rem;` : "")}
  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    flex-direction: ${(props) => (props.inCard ? "row" : "column")};
    justify-content: flex-start;
    align-items: flex-start;
    ${(props) =>
      props.inCard
        ? `
    img {
      width: 2rem;
      height: 2rem;
    }
    `
        : ""};
  }

  .social-icons {
    a:last-child img {
      margin-right: 0;
    }
    
  }
`;
export const HelpContainer = styled.div`
  display: flex;
  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    margin-bottom: 1.6rem;
  }
  & > div {
    background: #f3f4fe;
    border-radius: 4px;
    padding: 0.8rem 2rem;
    color: ${colors.royalBlue};
    margin-right: 0.8rem;
  }
`;

export const UserInfoContainer = styled.div`
  background-color: ${colors.white};
  box-shadow: 0px 0.2rem 2rem rgba(0, 0, 0, 0.01);
  max-width: 80rem;
  width: 100%;
  z-index: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 8px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
`;

export const AvatarPhotoContainer = styled.fieldset`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(2.8rem, -50%);
`;

export const PhotoUploadButton = styled.legend`
  position: absolute;
  bottom: 1rem;
  left: 10.5rem;
  @media screen and (max-width: ${mq.phone.wide.maxWidth}) {
    left: 7.5rem;
  }
`;

export const PlaceholderIcon = styled.div`
  flex: 1;
`;

export const HelpImage = styled.img`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  width: 35%;
  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    display: none;
  }
`;
export const UserInfoDesktop = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2.4rem 2.8rem;
`;

export const DescriptionDesktop = styled.div`
  margin-top: 1rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 140%;
  color: #939393;
  
  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    margin-top: 2rem;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2rem;
    color: #282828;
  }
`;
export const MobileLocation = styled.div`
  color: #939393;
  width: 70rem;
  margin-top: 0.5rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 140%;
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 1.6rem);
  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    display: none;
  }
`;
export const  DesktopLocation = styled.div`
  display: none;
  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    display: initial;
    width: auto;
    height: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1rem;
  }
`;