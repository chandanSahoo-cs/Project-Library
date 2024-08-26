import React from 'react';

function Footer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-[#212224] border rounded-md pb-10 overflow-hidden">
      <div>
        <img className="mt-7 ml-2 md:ml-40" src="https://www.indonez.com/html-demo/liquid/img/user/header-logo-6ohuZh.svg" alt="Logo" />
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="mt-7 ml-2 h-full w-[200px]">
          <h3 className="mb-9 text-xl font-semibold uppercase text-white">Markets</h3>
          <ul>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Web Platform</a>
            </li>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Trading Apps</a>
            </li>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Meta Trader 5</a>
            </li>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Compare Features</a>
            </li>
          </ul>
        </div>
        <div className="mt-7 ml-2 h-full w-[200px]">
          <h3 className="mb-9 text-xl font-semibold uppercase text-white">Account Types</h3>
          <ul>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Demo account</a>
            </li>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Standard account</a>
            </li>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">ECN account</a>
            </li>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Account</a>
            </li>
          </ul>
        </div>
        <div className="mt-7 ml-2 h-full w-[200px]">
          <h3 className="mb-9 text-xl font-semibold uppercase text-white">Learn to Trade</h3>
          <ul>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">News and trade ideas</a>
            </li>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Trading strategy</a>
            </li>
            <li className="mb-4">
              <a className="text-base font-medium text-gray-500" href="#">Forex trading course</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
