import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "KwikSend",
  custom: {
    myStage: "${opt:stage, self:provider.stage}",
    region: {
      prod: "us-east-2",
      dev: "us-east-1",
      test: "us-west-2",
    },
    serverlessSsmFetch: {},
    ssm: {},
    jetpack: { trace: true },
    bundle: {
      packager: "yarn",
      individually: true,
      splitStacks: {
        perFunction: false,
        perType: true,
        perGroupFunction: true,
        nestedStackCount: 10,
      },
      externals: ["superagent-proxy", "formidable"],
    },
  },
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    region: "${self:custom.region.${self:custom.myStage}}" as "eu-central-1",
    stage: "dev",
    versionFunctions: false,
    deploymentMethod: "direct",
    environment: {},
    profile: "kwiksend",
  },
  plugins: [
    "serverless-better-credentials",
    "serverless-ssm-fetch",
    "serverless-offline",
    "serverless-bundle",
    "serverless-prune-plugin",
    "serverless-jetpack",
    "serverless-plugin-split-stacks",
  ],
  functions: {
    user: {
      handler: "functions/Auth.connect",
      description: "Connect to Open Payments Wallet",
      timeout: 30,
      events: [
        {
          http: {
            path: "/user/connect",
            method: "post",
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
