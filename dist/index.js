"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var serve_1 = require("./commands/serve");
// add serve command file to commander
commander_1.program.addCommand(serve_1.serveCommand);
// tells commander what cli command is being run and what action needs to be executed
commander_1.program.parse(process.argv);
