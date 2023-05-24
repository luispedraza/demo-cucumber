import { Given, When, Then } from '@cucumber/cucumber'
import { Calculator } from '../../src/calculator';
import { expect } from 'chai'

let calculator: Calculator
let result: number

Given("Tengo una calculadora", () => {
  calculator = new Calculator()
});

When("Se suman {int} y {int}", (num1: number, num2: number) => {
  // When('Se ingresan {int} y {float}', function (int, float) {
  // When('Se ingresan {float} y {int}', function (float, int) {
  // When('Se ingresan {float} y {float}', function (float, float2) {
  // Write code here that turns the phrase above into concrete actions
  result = calculator.sum(num1, num2)
});

When("Se multiplican {int} y {int}", (num1: number, num2: number) => {
  // When('Se ingresan {int} y {float}', function (int, float) {
  // When('Se ingresan {float} y {int}', function (float, int) {
  // When('Se ingresan {float} y {float}', function (float, float2) {
  // Write code here that turns the phrase above into concrete actions
  result = calculator.multi(num1, num2)
});

Then("El resultado debe ser {int}", (resultExpected: number) => {
  // Then('El resultado debe ser {float}', function (float) {
  // Write code here that turns the phrase above into concrete actions
  expect(result).to.be.equal(resultExpected)
});
