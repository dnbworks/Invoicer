
function App() {
  const handlePrint = () => {
    window.print();
  }
  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h2>
          </div>
          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button
                  onClick={handlePrint}
                  className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
                >
                  Print
                </button>
              </li>
              <li className="mx-2">
                <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">
                  Download
                </button>
              </li>
              <li>
                <button className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">
                  Send
                </button>
              </li>
            </ul>
          </div>
        </header>

        <section className="flex flex-col items-end justify-end">
          <h3 className="text-xl uppercase">Your name</h3>
          <p>Your Address</p>
        </section>

        <section className="mt-5">
          <h3 className="text-xl uppercase">Client's name</h3>
          <p>Client's Address</p>
        </section>

        <article className="my-5 flex flex-col items-end justify-end">
          <ul>
            <li><span className="font-bold">Invoicer Number:</span></li>
            <li><span className="font-bold">Invoice Date:</span></li>
            <li><span className="font-bold">Due Date:</span></li>
          </ul>
        </article>

        <div className="my-5">this is the table</div>
        
        <section className="mb-5">
          <p>Notes to the client</p>
        </section>

        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className="font-bold">Your name:</span> Thomas Sankara
            </li>
            <li>
              <span className="font-bold">Your email:</span>{" "}
              tsbsankara@gmail.com
            </li>
            <li>
              <span className="font-bold">Phone number:</span> 0712 345 678
            </li>
            <li>
              <span className="font-bold">Bank:</span> Bank Account
            </li>
            <li>
              <span className="font-bold">Account holder:</span> Thomas Sankara
            </li>
            <li>
              <span className="font-bold">Account number:</span> 123 456 789
            </li>
            <li>
              <span className="font-bold">Website:</span>{" "}
              https://tsbsankara.co.ke
            </li>
            </ul>
        </footer>
      </main>
    </>
  );
}

export default App;
