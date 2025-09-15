
import "highlight.js/styles/github.css";
import { CodeBlock } from "./components/CodeBlock";
export const Page = () => {

    return (

        <div className="container mx-auto">

            <div className=" rounded-xl overflow-hidden p-6 bg-slate-800 md:flex md:p-0">
                <div className=" w-24 h-24 md:w-48 md:h-auto md:rounded-none mx-auto  bg-cover bg-center-top bg-[url(../src/assets/agostinho.jpg)] rounded-full  " ></div>
                <div className=" grow pt-6 text-center md:p-8 md:text-left">
                    <p className="text-lg text-white">“Eu não minto, eu omito.”</p>
                    <p className="text-sky-400 mt-3 font-bold">Agostinho Carrara </p>
                    <p className="text-sm text-gray-500">Ceo, Carrara taxi</p>
                </div>

            </div>


            <CodeBlock
                language="jsx"
                filename="Page.tsx"
                code={`<div className="container mx-auto">
  <div className="rounded-xl overflow-hidden p-6 bg-slate-800 md:flex md:p-0">
    <div className="w-24 h-24 md:w-48 md:h-auto md:rounded-none mx-auto bg-cover bg-center-top bg-[url(../src/assets/agostinho.jpg)] rounded-full"></div>
    <div className="grow pt-6 text-center md:p-8 md:text-left">
      <p className="text-lg text-white">“Eu não minto, eu omito.”</p>
      <p className="text-sky-400 mt-3 font-bold">Agostinho Carrara</p>
      <p className="text-sm text-gray-500">CEO, Carrara Táxi</p>
    </div>
  </div>
</div>`}
            />



        </div>


    );
}