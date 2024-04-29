import styled from "styled-components/native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images, FONTS } from "../../../constants";
import SignUpButtons from "./components/SignUpButtons/SignUpButtons";
import EmailField from "./components/EmailField";
import _layoutRoutes from "../../_layoutRoutes";
import WagmiProvider from "../../../components/WagmiProvider";

const SignUp = () => {
  return (
    <SignUpSafeAreaView>
      <SignUpView>
        <LogoView>
          <LogoImage source={images.logo} resizeMode="contain" />
        </LogoView>
        <SignUpText>Sign Up</SignUpText>
        <ConnectToContinueText>
          Connect a wallet to continue
        </ConnectToContinueText>
        <WagmiProvider>
          <SignUpButtons />
        </WagmiProvider>
        <DividerView>
          <Divider />
          <DividerText> Or </DividerText>
          <Divider />
        </DividerView>
        <EmailField />
        <RulesOfUseView>
          <RulesOfUseText>By signing up, you agree to the </RulesOfUseText>
          <RulesOfUseLink href={_layoutRoutes.termsOfService}>
            Terms of
          </RulesOfUseLink>
        </RulesOfUseView>
        <RulesOfUseView>
          <RulesOfUseLink href={_layoutRoutes.termsOfService}>
            Service
          </RulesOfUseLink>
          <RulesOfUseText> & </RulesOfUseText>
          <RulesOfUseLink href={_layoutRoutes.privacyPolicy}>
            Privacy Policy
          </RulesOfUseLink>
          <RulesOfUseText>.</RulesOfUseText>
        </RulesOfUseView>
      </SignUpView>
    </SignUpSafeAreaView>
  );
};

export default SignUp;

const RulesOfUseView = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
`;

const RulesOfUseText = styled.Text``;

const RulesOfUseLink = styled(Link)`
  font-family: ${FONTS.InterSemiBold};
  font-size: 12px;
  letter-spacing: -0.5px;
  text-align: center;

  color: #4450ab;
`;

const DividerText = styled.Text`
  margin: 0px 20px;

  color: #545454;
  font-family: ${FONTS.InterRegular};
  font-size: 14px;
  letter-spacing: -0.5px;
  text-align: center;
`;

const Divider = styled.View`
  border: 1px solid #d9d9d9;
  flex: 1;
`;

const DividerView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;

  margin-bottom: 24px;
`;

const ConnectToContinueText = styled.Text`
  color: #545454;
  font-family: ${FONTS.InterRegular};
  font-size: 14px;
  letter-spacing: -0.5px;
  text-align: center;

  margin-bottom: 24px;
`;

const SignUpText = styled.Text`
  color: #0f0f0f;
  font-family: ${FONTS.InterBold};
  font-size: 24px;
  letter-spacing: -0.5px;
  text-align: center;

  margin-bottom: 16px;
`;

const SignUpSafeAreaView = styled(SafeAreaView)`
  height: 100%;
  background-color: white;
`;

const LogoView = styled.View`
  display: flex;
  align-items: center;
  padding-bottom: 58.5px;
`;

const LogoImage = styled.Image`
  width: 64px;
  height: 74.5px;
`;

const SignUpView = styled.View`
  height: 100%;
  display: flex;
  padding: 20px;
`;
