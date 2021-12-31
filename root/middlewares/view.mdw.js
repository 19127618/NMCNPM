import {engine} from "express-handlebars";
import hbs_sections from 'express-handlebars-sections';
import numeral from 'numeral';

export default function (app) {
    app.engine('hbs', engine({
        extname: '.hbs',
        helpers: {
            format_number(val, unit) {
                return numeral(val).format('0,0') +' '+unit;
            },
            section: hbs_sections()
        }
    }));
    app.set('view engine', 'hbs');
    app.set("views", "./views");
}