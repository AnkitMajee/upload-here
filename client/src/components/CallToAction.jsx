import { Button } from 'flowbite-react';
import DSAinCpp from "../Assets/DSAinCpp.jpg";

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn Cpp Programming
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these repositories a complete guide to learn Cpp Programming and Data Structures.
            </p>
            <Button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium centerrounded-lg text-sm px-3 py-2 text-'>
                <a href="https://github.com/AnkitMajee/DataStructureInCpp" target='_blank' rel='noopener noreferrer'>
                AnkitMajee/DataStructureInCpp
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <a href="https://github.com/AnkitMajee/DataStructureInCpp" target='_blank' rel='noopener noreferrer'>
            <img className="h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0" src={DSAinCpp} alt="DSA in C++"  />
            </a>
        </div>
    </div>
  )
}