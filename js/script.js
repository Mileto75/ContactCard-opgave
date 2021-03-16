"use strict";

window.addEventListener("load", Initialize);

var txtUsername, txtEmail, txtTelephone,txtStreet,txtNumber,txtPostalCode,txtTown;
var cardUsername,cardEmail, cardTelephone,cardAddress;
var btnGenerate,btnClear;
var divCard;

var user;

function Initialize()
 {        
    BindElements();
    //create your own user object here ...
    AddeventListeners()
    HideElement(divCard);
}

function BindElements()
{
    //txtElements
    txtUsername = document.querySelector('#txtUsername');
    txtEmail = document.querySelector('#txtEmail');
    txtTelephone = document.querySelector('#txtTelephone');
    txtStreet = document.querySelector('#txtStreet');
    txtNumber = document.querySelector('#txtNumber');
    txtPostalCode = document.querySelector('#txtPostalCode');
    txtTown = document.querySelector('#txtTown');
    //card elements
    cardUsername = document.querySelector("#name");
    cardEmail = document.querySelector("#email");
    cardTelephone = document.querySelector("#telephone");
    cardAddress = document.querySelector("#address");
    //btn
    btnGenerate = document.querySelector('#btnGenerate');
    btnClear = document.querySelector('#btnClear');
    //div
    divCard = document.querySelector('div.card');
}

function AddeventListeners()
{
    btnGenerate.addEventListener('click',GenerateCard);
    //use fat arrow anonymous function
    btnClear.addEventListener('click',() => {ClearUi();HideElement(divCard)});
}

function GenerateCard()
{
   //fill the card elements
}

function MakeCardObject()
{
    let cardObject;
    //object properties here
    
    return cardObject;
}

function MakeAddressObject()
{
    let adressObject; 
    //object properties here
    return adressObject;
}

/**
 * Show an element
 * @param {*} element 
 */
function ShowElement(element)
{
    element.style.visibility = 'visible';
}
/**
 * Hide an element
 * @param {*} element 
 */
function HideElement(element)
{
    element.style.visibility = 'hidden';
}
/**
 * clear all inputs
 */
function ClearUi()
{
    //use querySelector all and loop to clear all inputs
    let inputs = document.querySelectorAll('input');
    for(let i=0;i<inputs.length;i++)
    {
        inputs[i].value = '';
    }
}
