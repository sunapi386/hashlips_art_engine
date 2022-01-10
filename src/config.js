const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.ada;

// General metadata for Ethereum
const namePrefix = "Roaming Llamas";
const description = "Unique NFT lamas issued from ROAM!";
const ipfsBaseUri =
  "ipfs://QmUCNU51aMqp5Emhnutr1vA2MHqMf6mJb8T3spMpvgJG88?filename=";
const httpsBaseUri = "https://roampool.com/llamas/image";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 200, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://roampool.com/nfts",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};
const adaMetadata = {
  symbol: "ROAM",
  seller_fee_basis_points: 200, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://roampool.com/nfts",
  creators: [
    {
      address:
        "addr1q8vczftecp45segsjvy2pk3fz3zc6s02np3d4ukyc7wp3dp6mhxrefruqptr93usqs0eqqlluueulx5ee8zd9xyq95mq4qqs5q",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "background" },
      { name: "face" },
      { name: "glasses" },
      { name: "hat" },
      { name: "neck" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  ipfsBaseUri,
  httpsBaseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  adaMetadata,
  gif,
  preview_gif,
};
