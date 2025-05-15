import {
  br as i
} from "./jpzGFStf.js";
const t = e => {
  if (e === void 0) return {
    label: "N/A"
  };
  const o = `#${i(e,{accuracy:0})}`;
  return e === 1 ? {
    icon: "emoji/GoldMedal",
    label: o
  } : e === 2 ? {
    icon: "emoji/SilverMedal",
    label: o
  } : e === 3 ? {
    icon: "emoji/BronzeMedal",
    label: o
  } : {
    label: o
  }
};
export {
  t as g
};