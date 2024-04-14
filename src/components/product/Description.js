import React from "react";

export default function Description() {
  return (
    <div>
      <div className=" w-11/12 lg:w-10/12 xl:w-7/12 m-auto py-5 ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          numquam dolores distinctio dolore eveniet, necessitatibus mollitia
          quos modi incidunt molestiae quia veniam! Reprehenderit quos quisquam
          corrupti sapiente eligendi expedita quidem. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Accusantium explicabo corrupti
          voluptatem dolore rerum perferendis delectus natus quisquam! Soluta
          omnis labore voluptatum atque sunt vero optio hic iusto recusandae
          quia?
        </p>
      </div>
      <div className=" m-auto w-11/12 flex flex-col md:flex-row  item-center justify-center gap-5">
        <div className=" rounded-md overflow-hidden ">
          <img className=" w-full md:w-auto " src="https://via.placeholder.com/600x350" alt="" />
        </div>
        <div className="rounded-md overflow-hidden">
          <img className=" w-full md:w-auto " src="https://via.placeholder.com/600x350" alt="" />
        </div>
      </div>
    </div>
  );
}
