import { Cards } from "./Cards";
export const Card = () => {
    const card = [
        {
            title: "White Dress",
            description: "BUY",
            discount: "-25%",
            image: "https://www.mapanache.com/wp-content/uploads/2021/08/Women-party-wear-designer-look-white-long-maxi-dress-with-full-sleeves-evening-gown-ma-panache-1100-800-GFS3275-4413-c.jpg",
            price: "$3.99",
            marked: "$5.99",
            like: "https://e7.pngegg.com/pngimages/615/837/png-clipart-heart-symbol-love-symbol-love-text.png",
            star: "https://cdn-icons-png.flaticon.com/512/149/149220.png",
            add: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png",
          },
          {
            title: "Denim Jacket",
            description: "BUY",
            discount: "-25%",
            image: "https://media.gettyimages.com/id/854479460/photo/with-good-basics-youll-have-endless-options.jpg?s=612x612&w=gi&k=20&c=bwPbEORCZoLjYBIOf83XQVTJjyhgic3wB7dAHcJFQxE=",
            price: "$3.99",
            marked: "$5.99",
            star: "https://cdn-icons-png.flaticon.com/512/149/149220.png",
            like: "https://e7.pngegg.com/pngimages/615/837/png-clipart-heart-symbol-love-symbol-love-text.png",
            add: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png",

          },
          {
            title: "Hush Puppies",
            description: "BUY",
            discount: "-25%",
            star: "https://cdn-icons-png.flaticon.com/512/149/149220.png",
            like: "https://e7.pngegg.com/pngimages/615/837/png-clipart-heart-symbol-love-symbol-love-text.png",
            image: "https://i.pinimg.com/564x/5e/25/43/5e25439038a52cd27cde0d9d9cd37748.jpg",
            price: "$3.99",
            marked: "$5.99",
            add: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png",

          },
          {
            title: "Athens Skirt",
            description: "BUY",
            discount: "-25%",
            star: "https://cdn-icons-png.flaticon.com/512/149/149220.png",
            like: "https://e7.pngegg.com/pngimages/615/837/png-clipart-heart-symbol-love-symbol-love-text.png",
            image: "https://cdn.cliqueinc.com/posts/295270/pleated-skirt-outfits-295270-1631901459734-promo.700x0c.jpg",
            price: "$3.99",
            marked: "$5.99",
            add: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png",
          },
    ]
    return(
        <div className="cards-container">
            {card.map((data,index) =>(
                <Cards data={data} key={index}></Cards>
            ))
            }
        </div>
    );
}