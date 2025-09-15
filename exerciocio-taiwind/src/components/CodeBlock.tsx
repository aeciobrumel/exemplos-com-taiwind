import { useEffect, useState } from "react";
import "highlight.js/styles/vs2015.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("jsx", xml);
hljs.registerLanguage("typescript", typescript);

interface CodeBlockProps {
    code: string;
    language: string;
    filename?: string;
    compact?: boolean;
    maxHeightClass?: string;
}

export const CodeBlock = ({
    code,
    language,
    filename = "exemplo.js",
    compact = true,
    maxHeightClass = "max-h-60",
}: CodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#1e1e1e] rounded-lg shadow-lg overflow-hidden border border-gray-700">
            {/* Barra estilo editor */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#2d2d2d] border-b border-gray-700">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                    <span className={`text-gray-400 ${compact ? "text-[10px]" : "text-xs"} ml-3`}>
                        {filename}
                    </span>
                </div>

                {/* Botão copiar (SVG fixado p/ JSX: strokeWidth etc.) */}
                <button
                    onClick={handleCopy}
                    className={`rounded transition text-gray-300 hover:bg-gray-600 ${compact ? "p-1" : "p-1.5"}`}
                    title="Copiar código"
                >
                    {copied ? (
                        <span className={`${compact ? "text-[10px]" : "text-xs"} text-green-400`}>Copiado!</span>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={compact ? "w-4 h-4" : "w-5 h-5"}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Código (compacto = fonte menor, menos padding, altura limitada com scroll) */}
            <pre
                className={[
                    "overflow-auto",
                    compact ? "p-3 text-[12px] leading-tight" : "p-4 text-sm leading-relaxed",
                    maxHeightClass, // controla a altura máxima
                ].join(" ")}
                style={{ tabSize: 2 }}   // tabs curtinhas deixam tudo mais enxuto
            >
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
};
