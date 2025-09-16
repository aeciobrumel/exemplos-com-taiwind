
import "highlight.js/styles/github.css";
import { CodeBlock } from "./components/CodeBlock";
export const Page = () => {

    return (
        <div className="w-full bg-[#0b1222]">
            <div className="text-white text-4xl text-center p-10 font-bold">
                Aqui vão exemplos de códigos práticos em react usando tailwind:
            </div>
            <div className="container mx-auto">

                <div className="bg-slate-950  my-10 rounded-2xl ">

                    <div className="text-white text-3xl p-3 font-bold"> Card responsivo</div>
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
                        filename="card.tsx"
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
                <div className="bg-slate-700  my-10 rounded-2xl ">
                    <div className="text-white text-3xl p-3 font-bold  "> Loading</div>
                    <div className="flex flex-row items-center bg-slate-800 ">



                        <div className="flex flex-col w-6/12">
                            <div className="flex justify-center p-10">
                                <div className="  w-12 h-12 border-8 border-cyan-100/10 border-b-cyan-500  animate-spin rounded-full "></div>
                            </div>
                        </div>
                        <div className="w-5/12">
                            <CodeBlock
                                language="jsx"
                                filename="spinner.tsx"
                                code={`<div 
    className="w-12 h-12 border-8 border-cyan-100/10 border-b-cyan-500  animate-spin rounded-full ">
</div>`}
                            />
                        </div>
                    </div>
                </div>

                <div className=" bg-slate-900 rounded-2xl">
                    <div className="text-3xl font-bold pt-4 ps-4 text-white">Grid com Fotos espaciais</div>

                    <div className="p-3 rounded-md bg-slate-900 ">
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                            <div className=" w-full bg-cover bg-center md:col-span-2 md:row-span-2 md:h-full h-60 bg-[url(../src/assets/7.jpg)]"></div>
                            <div className=" w-full bg-cover bg-center h-60 bg-[url(../src/assets/1.jpg)]"></div>
                            <div className=" w-full  bg-cover bg-center h-60 bg-[url(../src/assets/8.jpg)]"></div>

                        </div>

                        <div className="p-5">
                            <CodeBlock
                                language="jsx"
                                filename="PhotoGrid.tsx"
                                code={`<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
    <div className=" w-full bg-cover bg-center md:col-span-2 md:row-span-2 md:h-full h-60 bg-[url(../src/assets/7.jpg)]"></div>
    <div className=" w-full bg-cover bg-center h-60 bg-[url(../src/assets/1.jpg)]"></div>
    <div className=" w-full  bg-cover bg-center h-60 bg-[url(../src/assets/8.jpg)]"></div>
</div>`}
                            />
                        </div>


                    </div>
                </div>

                <div className="p-3  mt-10 rounded-md bg-slate-800 ">
                    <div className="text-2xl font-bold text-white py-10">
                        Tabela responsiva
                    </div>
                    <div >
                        <table className="bg-slate-700 w-full text-white">
                            <thead>
                                <tr className="border-b text-left text-sm border-white ">
                                    <th className="py-2">Nome</th>
                                    <th className="py-2 hidden md:table-cell">Título</th>
                                    <th className="py-2 hidden md:table-cell">Email</th>
                                    <th className="py-2">Função</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b text-left text-sm border-white ">
                                    <td className="py-2">
                                        <p className="font-bold">
                                            Michael Scott
                                        </p>
                                        <p className="block md:hidden">Regional Manager</p>
                                        <p className="block md:hidden">michael.scott@dundermifflin.com</p>
                                    </td>
                                    <td className="hidden md:table-cell">Regional Manager</td>
                                    <td className="hidden md:table-cell">michael.scott@dundermifflin.com</td>
                                    <td>Gerente</td>
                                    <td><a href="">Editar</a></td>
                                </tr>
                                <tr className="border-b text-left text-sm border-white ">
                                    <td className="py-2">
                                        <p className="font-bold">Jim Halpert</p>
                                        <p className="block md:hidden">Sales Representative</p>
                                        <p className="block md:hidden">jim.halpert@dundermifflin.com</p>
                                    </td>
                                    <td className="hidden md:table-cell">Sales Representative</td>
                                    <td className="hidden md:table-cell">jim.halpert@dundermifflin.com</td>
                                    <td>Vendas</td>
                                    <td><a href="">Editar</a></td>
                                </tr>
                                <tr className="border-b text-left text-sm border-white ">
                                    <td className="py-2">
                                        <p className="font-bold">Pam Beesly</p>
                                        <p className="block md:hidden">Receptionist</p>
                                        <p className="block md:hidden">pam.beesly@dundermifflin.com</p>
                                    </td>
                                    <td className="hidden md:table-cell">Receptionist</td>
                                    <td className="hidden md:table-cell">pam.beesly@dundermifflin.com</td>
                                    <td>Recepção</td>
                                    <td><a href="">Editar</a></td>
                                </tr>
                                <tr className="border-b text-left text-sm border-white ">
                                    <td className="py-2">
                                        <p className="font-bold">Dwight Schrute</p>
                                        <p className="block md:hidden  text-zinc-400">Assistant to the Regional Manager</p>
                                        <p className="block md:hidden text-sky-400">dwight.schrute@dundermifflin.com</p>
                                    </td>
                                    <td className="hidden md:table-cell">Assistant to the Regional Manager</td>
                                    <td className="hidden md:table-cell">dwight.schrute@dundermifflin.com</td>
                                    <td>Vendas</td>
                                    <td><a href="">Editar</a></td>
                                </tr>
                                <tr className="border-b text-left text-sm border-white ">
                                    <td className="py-2">
                                        <p className="font-bold">Stanley Hudson</p>
                                        <p className="block md:hidden">Sales Representative</p>
                                        <p className="block md:hidden">stanley.hudson@dundermifflin.com</p>
                                    </td>
                                    <td className="hidden md:table-cell">Sales Representative</td>
                                    <td className="hidden md:table-cell">stanley.hudson@dundermifflin.com</td>
                                    <td>Vendas</td>
                                    <td><a href="">Editar</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className=" flex justify-center p-10">

                            <div className="w-10/12">
                                <CodeBlock
                                    language="jsx"
                                    filename="table.tsx"
                                    code={`<table className="bg-slate-700 w-full text-white">
    <thead>
        <tr className="border-b text-left text-sm border-white ">
            <th className="py-2">Nome</th>
            <th className="py-2 hidden md:table-cell">Título</th>
            <th className="py-2 hidden md:table-cell">Email</th>
            <th className="py-2">Função</th>
        </tr>
    </thead>
    <tbody>
        <tr className="border-b text-left text-sm border-white ">
            <td className="py-2">
                <p className="font-bold">
                    Michael Scott
                </p>
                <p className="block md:hidden">Regional Manager</p>
                <p className="block md:hidden">michael.scott@dundermifflin.com</p>
            </td>
            <td className="hidden md:table-cell">Regional Manager</td>
            <td className="hidden md:table-cell">michael.scott@dundermifflin.com</td>
            <td>Gerente</td>
            <td><a href="">Editar</a></td>
        </tr>
        <tr className="border-b text-left text-sm border-white ">
            <td className="py-2">
                <p className="font-bold">Jim Halpert</p>
                <p className="block md:hidden">Sales Representative</p>
                <p className="block md:hidden">jim.halpert@dundermifflin.com</p>
            </td>
            <td className="hidden md:table-cell">Sales Representative</td>
            <td className="hidden md:table-cell">jim.halpert@dundermifflin.com</td>
            <td>Vendas</td>
            <td><a href="">Editar</a></td>
        </tr>
        <tr className="border-b text-left text-sm border-white ">
            <td className="py-2">
                <p className="font-bold">Pam Beesly</p>
                <p className="block md:hidden">Receptionist</p>
                <p className="block md:hidden">pam.beesly@dundermifflin.com</p>
            </td>
            <td className="hidden md:table-cell">Receptionist</td>
            <td className="hidden md:table-cell">pam.beesly@dundermifflin.com</td>
            <td>Recepção</td>
            <td><a href="">Editar</a></td>
        </tr>
        <tr className="border-b text-left text-sm border-white ">
            <td className="py-2">
                <p className="font-bold">Dwight Schrute</p>
                <p className="block md:hidden  text-zinc-400">Assistant to the Regional Manager</p>
                <p className="block md:hidden text-sky-400">dwight.schrute@dundermifflin.com</p>
            </td>
            <td className="hidden md:table-cell">Assistant to the Regional Manager</td>
            <td className="hidden md:table-cell">dwight.schrute@dundermifflin.com</td>
            <td>Vendas</td>
            <td><a href="">Editar</a></td>
        </tr>
        <tr className="border-b text-left text-sm border-white ">
            <td className="py-2">
                <p className="font-bold">Stanley Hudson</p>
                <p className="block md:hidden">Sales Representative</p>
                <p className="block md:hidden">stanley.hudson@dundermifflin.com</p>
            </td>
            <td className="hidden md:table-cell">Sales Representative</td>
            <td className="hidden md:table-cell">stanley.hudson@dundermifflin.com</td>
            <td>Vendas</td>
            <td><a href="">Editar</a></td>
        </tr>
    </tbody>
</table>`}
                                />
                            </div>
                        </div>


                    </div>

                </div>



            </div >

        </div>
    );
}