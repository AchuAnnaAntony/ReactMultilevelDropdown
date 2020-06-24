import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DropdownMenu from './DropdownMenu';



var destination = document.querySelector('#container');


ReactDOM.render( <
  DropdownMenu config = {
    [{
        "title": "Home",
        "submenu": null
     },
     {
        "title": "Category",
        "submenu": [{
            "title": "Gents",
            "submenu": [{
                "title": "Shirts",
                "submenu": null
              },
              {
                "title": "Pants",
                "submenu": null
              }]
          },
          {
            "title": "Ladies",
            "submenu": [{
                "title": "Dresses",
                "submenu": null
              },
              {
                "title": "Bags",
                "submenu": null
              }]
          },
          {
            "title": "Kids",
            "submenu": [{
                "title": "Pajamas",
                "submenu": null
              },
              {
                "title": "Shirts",
                "submenu": null
              }]
          }]
     }
  ]}
  />, destination);
  