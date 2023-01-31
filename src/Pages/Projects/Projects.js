import React, { useEffect } from "react";
import { useState } from "react";
import useProduct from "../../utils/useProduct";
import ProjectList from "./ProjectList";

const Projects = () => {
  const [all, setAll] = useState(false);
  const [react, setReact] = useState(false);
  const [html, setHtml] = useState(false);
  const [blog, setBlog] = useState(false);
  const [eCommerce, setECommerce] = useState(false);
  const [single, setSingle] = useState(false);
  const [multiple, setMultiple] = useState(false);
  const [todoApp, setTodoApp] = useState(false);
  const [others, setOthers] = useState(false);
  const [js, setJs] = useState(false);
  const [data] = useProduct();
  const [projectData, setProjectData] = useState(data);

  const allData = data;
  const reactData = data?.filter((p) => p.category?.find((c) => c === "React"));
  const htmlData = data?.filter((p) => p.category?.find((c) => c === "Html"));
  const jsData = data?.filter((p) =>
    p.category?.find((c) => c === "JavaScript")
  );
  const eCommerceData = data?.filter((p) =>
    p.category?.find((c) => c === "E-Commerce")
  );
  const blogData = data?.filter((p) => p.category?.find((c) => c === "Blog"));
  const singleData = data?.filter((p) =>
    p.category?.find((c) => c === "SinglePage")
  );
  const multipleData = data?.filter((p) =>
    p.category?.find((c) => c === "MultiplePage")
  );
  const todoAppData = data?.filter((p) =>
    p.category?.find((c) => c === "TodoApp")
  );
  const othersData = data?.filter((p) =>
    p.category?.find((c) => c === "Others")
  );

  //"React","Html","JavaScript","E-Commerce","Blog","Education","SinglePage","MultiplePage","TodoApp","WordPress","JQuery","Android","Others"
  useEffect(() => {
    setAll(true);
    setReact(false);
    setHtml(false);
    setJs(false);
    setECommerce(false);
    setBlog(false);
    setSingle(false);
    setMultiple(false);
    setTodoApp(false);
    setOthers(false);
    setProjectData(data);
  }, [data]);

  // const change1 = () => {
  //   setAll(false);
  //   setReact(false);
  //   setHtml(false);

  // setJs(false);
  //   setECommerce(false);
  //   setBlog(false);
  //   setSingle(false);
  //   setMultiple(false);
  //   setTodoApp(false);
  //setOthers(false);
  //setProjectData();
  // };

  // const  = () => {
  //   setResent(false);
  //   setall(false);
  // };

  return (
    <div>
      {/* projects */}
      <section id="resent-project" className=" py-10">
        <div className=" text-center mx-20 my-5 ">
          <h1 className="text-3xl my-[4px] uppercase  text-orange-400 font-bold text-center">
            My All Portfolio Projects Here
          </h1>
        </div>
        <div>
          <p className=" w-8/12 lg:6/12 mx-auto text-center font-normal">
            FWR blocks contains a variety of blocks and elements that you can
            mix and match to create various layouts. FWR blocks follow a similar
            pattern and design style so you can reuse it in your websites and
            web applications.
          </p>
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-1 md:gap-10 my-8">
          <button
            onClick={() => {
              setAll(true);
              setReact(false);
              setHtml(false);
              setJs(false);
              setECommerce(false);
              setBlog(false);
              setSingle(false);
              setMultiple(false);
              setTodoApp(false);
              setOthers(false);
              setProjectData(allData);
            }}
            className={` px-4 py-2 border-[1px] ${
              all
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }    rounded-md text-center font-semibold`}
          >
            All
          </button>

          {/*  */}
          <button
            onClick={() => {
              setAll(false);
              setReact(true);
              setHtml(false);
              setJs(false);
              setECommerce(false);
              setBlog(false);
              setSingle(false);
              setMultiple(false);
              setTodoApp(false);
              setOthers(false);
              setProjectData(reactData);
            }}
            className={` px-2 py-2 border-[1px] ${
              react
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            React Project
          </button>

          {/*  */}
          <button
            onClick={() => {
              setAll(false);
              setReact(false);
              setHtml(true);
              setJs(false);
              setECommerce(false);
              setBlog(false);
              setSingle(false);
              setMultiple(false);
              setTodoApp(false);
              setOthers(false);
              setProjectData(htmlData);
            }}
            className={` px-2 py-2 border-[1px] ${
              html
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            HTML Project
          </button>

          {/*  */}
          <button
            onClick={() => {
              setAll(false);
              setReact(false);
              setHtml(false);
              setJs(true);
              setECommerce(false);
              setBlog(false);
              setSingle(false);
              setMultiple(false);
              setTodoApp(false);
              setOthers(false);
              setProjectData(jsData);
            }}
            className={` px-2 py-2 border-[1px] ${
              js
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            JavaScript Project
          </button>

          {/*  */}
          <button
            onClick={() => {
              setAll(false);
              setReact(false);
              setHtml(false);
              setJs(false);
              setECommerce(true);
              setBlog(false);
              setSingle(false);
              setMultiple(false);
              setTodoApp(false);
              setOthers(false);
              setProjectData(eCommerceData);
            }}
            className={` px-2 py-2 border-[1px] ${
              eCommerce
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            E-Commerce Site
          </button>

          {/*  */}
          <button
            onClick={() => {
              setAll(false);
              setReact(false);
              setHtml(false);
              setJs(false);
              setECommerce(false);
              setBlog(true);
              setSingle(false);
              setMultiple(false);
              setTodoApp(false);
              setOthers(false);
              setProjectData(blogData);
            }}
            className={` px-2 py-2 border-[1px] ${
              blog
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            BLOG Site
          </button>

          {/*  */}
          <button
            onClick={() => {
              setAll(false);
              setReact(false);
              setHtml(false);
              setJs(false);
              setECommerce(false);
              setBlog(false);
              setSingle(true);
              setMultiple(false);
              setTodoApp(false);
              setOthers(false);
              setProjectData(singleData);
            }}
            className={` px-2 py-2 border-[1px] ${
              single
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            Single-Page
          </button>

          {/*  */}
          <button
            onClick={() => {
              setAll(false);
              setReact(false);
              setHtml(false);
              setJs(false);
              setECommerce(false);
              setBlog(false);
              setSingle(false);
              setMultiple(true);
              setTodoApp(false);
              setOthers(false);
              setProjectData(multipleData);
            }}
            className={` px-2 py-2 border-[1px] ${
              multiple
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            Multiple-Project
          </button>

          {/*  */}
          <button
            onClick={() => {
              setAll(false);
              setReact(false);
              setHtml(false);
              setJs(false);
              setECommerce(false);
              setBlog(false);
              setSingle(false);
              setMultiple(false);
              setTodoApp(true);
              setOthers(false);
              setProjectData(todoAppData);
            }}
            className={` px-2 py-2 border-[1px] ${
              todoApp
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            Todo-App
          </button>

          {/*  */}
          {/* <button
            onClick={() => {
              setAll(false);
              setReact(false);
              setHtml(false);
              setJs(false);
              setECommerce(false);
              setBlog(false);
              setSingle(false);
              setMultiple(false);
              setTodoApp(false);
              setOthers(true);
              setProjectData(othersData);
            }}
            className={` px-2 py-2 border-[1px] ${
              others
                ? "border-slate-600 bg-green-700 text-gray-900"
                : "border-gray-500"
            }  rounded-md text-center font-semibold`}
          >
            Others
          </button> */}

          {/*  */}
        </div>

        <div className="mx-8 lg:mx-1 gap-4 md:gap-10">
          <div class="text-center mr-10 my-10 pb-9 ">
            <ProjectList data={projectData} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
