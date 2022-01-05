import {engine} from "express-handlebars";
import hbs_sections from 'express-handlebars-sections';
import numeral from 'numeral';
import * as fs from "fs";

export default function (app) {
    app.engine('hbs', engine({
        extname: '.hbs',
        helpers: {
            format_number(val, unit) {
                return numeral(val).format('0,0') +' '+unit;
            },
            section: hbs_sections(),
            is_exist(filepath){
                fs.access(filepath, function (error) {
                    if (error) {
                        console.log("Directory does not exist.");
                        return false;
                    } else {
                        console.log("Directory exists.");
                        return true;
                    }
                });
            }
        }
    }));
    app.set('view engine', 'hbs');
    app.set("views", "./views");
}