import AWS, {
  CognitoIdentityServiceProvider
} from "aws-sdk/dist/aws-sdk-react-native";
import * as enhancements from "react-native-aws-cognito-js";

Object.keys(enhancements).forEach(
  key => (CognitoIdentityServiceProvider[key] = enhancements[key])
);

AWS.config.update({ region: "us-east-2" });

export const poolData = {
  UserPoolId: "us-east-2_ZzPnfK9vm",
  ClientId: "1ba29768oghsg23l3r8js9nhg5"
};

export const userPool = new AWS.CognitoIdentityServiceProvider.CognitoUserPool(
  poolData
);

export default AWS;
