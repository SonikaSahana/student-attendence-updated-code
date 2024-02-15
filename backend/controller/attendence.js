const express = require('express')
const path=require("path");
const { Model } = require('sequelize');

exports.loadAttendencePage = (req,res,next) => {
    res.sendFile(path.join(__dirname,'..','..','frontend', 'views','index.html'));
}

