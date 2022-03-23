import React from 'react';
import { Route } from 'react-router-dom';

const Home = () => (
  <Route path="/">
    <div className="container">
      <h1>Welcome to our page!</h1>
      <p>
        Math magicians is a website for all fans of mathematics.
        It is a Single
        Page App (SPA) that allows users to:
        Make simple calculations.A calculator is a device
        performs arithmetic operations on numbers.
        The simplest calculators can do only addition, subtraction, multiplication, and division.
        More sophisticated calculators can handle
        exponent ial operations, roots, logarithm s,
        trigonometric functions, and hyperbolic functions.
        Use the basic math calculator to do simple calculations.
        The purpose of a calculator is to do correct calculations,
        and to do so efficiently. It is clear that a calculator
        should relieve the user of the need to do mental
        operations and of the need to rely on paper,
        so far as possible.This technology allows students
        solve complicated problems quickly and in an efficient
        manner. Additionally, it can reduce the problem to
        simpler tasks and allows the student to devote
        more time in understanding the problem Read a
        random math-related quote.
      </p>
    </div>
  </Route>
);
export default Home;
