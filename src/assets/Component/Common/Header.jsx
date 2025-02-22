import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <div class="header-2">
          <nav class="bg-white py-2 md:py-4">
            <div class="container px-4 mx-auto md:flex md:items-center">
              <div class="flex justify-between items-center">
                <Link to="/home-page" class="font-bold text-xl text-indigo-600">
                  FWR
                </Link>
                <button
                  class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  id="navbar-toggle"
                >
                  <i class="fas fa-bars"></i>
                </button>
              </div>

              <div
                class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                <Link to="/home"class="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                >
                  Home
                </Link>
                <Link to="/add-quiz"class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Add Quiz
                </Link>
                <Link to="/view-quiz" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  ViewQuiz
                </Link>
                <Link to="/play-quiz" class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  PlayQuiz
                </Link>
               
                <Link  to="/login-quiz"class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300" >
                  Login
                </Link>
                <button class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                >
                  Signup
                </button>
                
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
