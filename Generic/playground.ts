const getObjectValueFromKey = <TObj, TKey extends keyof TObj>(
  obj: TObj,
  key: TKey
) => {
  return obj[key];
};

const obj2 = {
  a: "Hello",
  b: 1,
  c: true,
};

const a = getObjectValueFromKey(obj2, "c");
//    ^?
