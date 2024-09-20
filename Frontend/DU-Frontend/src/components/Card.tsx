const Card = () => {
    return (
      <div className="flex justify-center item-center">
        <div className="relative flex flex-col my-6 bg-lime-300 shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-bold">
           Join Communities
          </h5>
          <p className="text-slate-600 leading-normal font-light">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
          </p>
       
          <button className="rounded-md  font-bold bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Join
          </button>
        </div>
      </div>

      <div className="relative flex flex-col my-6 bg-green-200 shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-bold">
           Create Communities
          </h5>
          <p className="text-slate-600 leading-normal font-light">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
          </p>
       
          <button className="rounded-md font-bold bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Create
          </button>
        </div>
      </div>

      <div className="relative flex flex-col my-6 bg-yellow-400 shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-bold">
           Join Hackathon
          </h5>
          <p className="text-slate-600 leading-normal font-light">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
          </p>
       
          <button className="rounded-md font-bold bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Register
          </button>
        </div>
      </div>

      <div className="relative flex flex-col my-6 bg-yellow-200 shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="p-4">
          <h5 className="mb-2 text-slate-800 text-xl font-bold">
           Create Hackthon
          </h5>
          <p className="text-slate-600 leading-normal font-light">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
          </p>
       
          <button className="rounded-md font-bold bg-slate-800 py-2 px-4 mt-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            Create
          </button>
        </div>
      </div>
      </div> 
    );
};

export default Card;
