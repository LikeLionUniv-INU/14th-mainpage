import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #111;
  color: #888;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
    padding: 30px 20px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
    margin-bottom: 5px;
  }

  p {
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: #444;

  @media (max-width: 768px) {
    display: none;
    width: 100%;
    height: 1px;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h3 {
    font-size: 0.9rem;
    font-weight: bold;
    color: white;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.a`
  color: #888;
  font-size: 1.5rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  &:hover {
    color: #ff7710;
    transform: translateY(-3px);
  }
`;

export const TopButton = styled.button`
  background-color: #ff7710;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.3s;

  margin-left: auto;

  &:hover {
    background-color: #e06000;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;
