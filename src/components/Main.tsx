const Main = () => (
  <main>
    <div className="p-3">
      <h1 className="text-center">TITLE</h1>
      <p className="text-center">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        aut?
      </p>
    </div>
    <div>
      <img
        src="https://any-store.com.ua/flashlight/images/offer_img.webp"
        alt="item"
        className="object-cover"
      />
      <div className="flex justify-around">
        <div>rating</div>
        <div>review</div>
        <div>orders</div>
      </div>
      <div className="flex justify-around">
        <div className="bg-slate-300 w-3/6 h-14">OLD PRICE</div>
        <div className="w-3/6 h-14">NEW PRICE</div>
      </div>
    </div>
  </main>
);

export default Main;
