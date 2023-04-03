import React from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";


export default function ProjectPreview({props}) {

    // const {name} = props.name;

    const styleVisible = 'flex p-5 rounded-lg bg-[#ebe8ee] flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'
    const styleHidden = 'flex p-5 rounded-lg bg-[#ebe8ee] opacity-50 flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4'

    const [visible, setVisible] = useState(true);
    const [style, setStyle] = useState({styleVisible})

    return (
        <>
        
       <div className={visible ? styleVisible : styleHidden}>
        {/* <div className="flex p-5 rounded-lg bg-[#ebe8ee] flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"> */}
            <img
                src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80" className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
            <a className="bg-purple-400 flex items-center leading-none text-xs font-medium text-gray-50 pt-2 pr-5 pb-2 pl-5
                rounded-full inline-block hover:bg-purple-500" href={props.link} target="_blank">View on GitHub</a>
            <a className="text-lg font-bold sm:text-xl md:text-2xl">{props.name}</a>
            <p className="text-sm text-black">{props.description}</p>
            {/* <div className="pt-2 pr-0 pb-0 pl-0">
            <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">John Smith</a>
            <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">· 23rd, March 2021 ·</p>
            <p className="inline text-xs font-medium text-purple-300 mt-0 mr-1 mb-0 ml-1">Solidity · Ethers.js</p>
            </div> */}
            

            <label className="relative flex-direction-row-reverse inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" onChange={(e) => setVisible(!visible)}/>
                <div className="w-11 h-6 bg-purple-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-00 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                <span className="ml-3 text-sm font-medium text-purple-400 dark:text-purple-300">{visible ? "Hide Project" : "View Project"}</span>
            </label>

      </div>
      </>
    );
}