import React from "react";

function addblog() {
  return (
    <div className="addblog_style">
      <form>
        <div>
          <input
            type="lname"
            placeholder={("numberregister_l_name")}
            color="#fff"
            className="alignment-input mt-5 NumberRegistration-Input pt-1 pb-2 block w-full px-0 mt-0 bg-transparent bordercolor- border-1  
                bordercolor- border-top-0 bordercolor- border-end-0 bordercolor- border-start-0    text-white bg-dark
                border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 mb-4"
          />
        </div>
      </form>
    </div>
  );
}

export default addblog;
