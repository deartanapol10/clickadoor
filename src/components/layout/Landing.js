import React, { Component } from "react";

import FacebookProvider, { Share } from "react-facebook";
import { appId } from "../../config/appId";

import img_index from "../../img/index.png";
import img_1 from "../../img/1.png";
import img_2 from "../../img/2.png";
import img_3 from "../../img/3.png";
import img_4 from "../../img/4.png";
import img_5 from "../../img/5.png";
import img_6 from "../../img/6.png";
import img_7 from "../../img/7.png";
import img_8 from "../../img/8.png";
import img_9 from "../../img/9.png";

class Landing extends Component {
   render() {
      var index = <img src={img_index} style={{ width: "500px" }} />;

      const min = 1;
      const max = 9;
      var randNum = Math.floor(Math.random() * (max - min + 1)) + min;

      const imgArray = [
         img_1,
         img_2,
         img_3,
         img_4,
         img_5,
         img_6,
         img_7,
         img_8,
         img_9
      ];

      var answer = (
         <img src={imgArray[randNum - 1]} style={{ width: "500px" }} />
      );

      return (
         <div className="container">
            {index}
            <hr />
            {answer}
            <hr />

            {/* Share to Facebook */}
            <FacebookProvider appId={appId}>
               <Share href="http://www.puginstudio.com">
                  <button
                     type="button"
                     className="btn btn-primary btn-lg btn-block"
                  >
                     Share to Facebook
                  </button>
               </Share>
            </FacebookProvider>
         </div>
      );
   }
}

export default Landing;
