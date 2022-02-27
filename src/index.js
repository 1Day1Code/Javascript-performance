import "./styles.css";

import "./styles.css";

const generateIds = [...Array(200).keys()];
const func = async () => {
  console.time("startfunc");
  // const result = await Promise.all(
  //   generateIds.map(async (id, i) => {
  //     const todos = await fetch(
  //       `https://jsonplaceholder.typicode.com/todos/${i}`
  //     );
  //     const jsonData = await todos.json();
  //     return jsonData;
  //   })
  // );
  const result = await Promise.all(
    generateIds.map(async (id, i) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${i}`
      );
      const jsonData = await res.json();
      return jsonData;
    })
  );
  return result;
};

const func2 = async () => {
  // const result = await Promise.all(
  //   generateIds.map(async (id, i) => {
  //     const res = await new Promise(async (resolve) => {
  //       const todos = await fetch(
  //         `https://jsonplaceholder.typicode.com/todos/${i}`
  //       );
  //       const jsonData = await todos.json();
  //       return resolve(jsonData);
  //     });
  //     return res;
  //   })
  // );

  // const result = await Promise.all(
  //   generateIds.map(async (id, i) => {
  //     const todos = await fetch(
  //       `https://jsonplaceholder.typicode.com/todos/${i}`
  //     );
  //     const jsonData = await todos.json();
  //     return jsonData;
  //   })
  // );
  const result = await Promise.all(
    generateIds.map(async (id, i) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${i}`
      );
      const jsonData = await res.json();
      return jsonData;
    })
  );
  console.timeEnd("startfunc");
  return result;
};

async function func3() {
  console.log("Start func3!");
  console.time("startfunc3");
  const result = await func();
  const result2 = await func2();
  console.log([...result, ...result2], "Promise finished!");
  console.timeEnd("startfunc3");
}
func4();
func3();

async function func4() {
  console.log("Start func4!");
  console.time("startFunc4");
  await Promise.all([func(), func2()]).then((res) => {
    console.log([...res[0], ...res[1]], "PromiseAll finished!");
  });
  console.timeEnd("startFunc4");
}
// func4();
