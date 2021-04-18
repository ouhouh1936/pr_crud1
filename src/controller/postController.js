import crud1 from "../models/crud1";

export const postController = async (req, res) => {
    try {
      const result = await crud1.find({}, {});
  
      console.log(result);
      res.render("post", {status: true ,list: result})
    } catch (e) {
      console.log(e);
    } 
  
    res.render("post" , {status: false , list: []  });
  };
export const postCreateController = async (req, res) => {
    res.render("post_c")
}
export const postDetailController = async (req, res) => {
    res.render("post_d")
}
