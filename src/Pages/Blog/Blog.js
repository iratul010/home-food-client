import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="flush-headingOne">
          <button
            class="accordion-button
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            <FaHandPointRight className="text-yellow-400 text-2xl mr-2" /> Difference between SQL and NoSQL.
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse border-0 collapse show"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body py-4 px-5">
            The five critical differences between SQL vs NoSQL are: SQL databases are relational, NoSQL databases are
            non-relational.
            <br />
            * SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for
            unstructured data. <br />
            * SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
            <br />
            * SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
            <br />* SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like
            documents or JSON.
          </div>
        </div>
      </div>
      <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="flush-headingTwo">
          <button
            class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            <FaHandPointRight className="text-yellow-400 text-2xl mr-2" /> What is JWT, and how does it work?
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse border-0 collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body py-4 px-5">
            * What is JWT ? <br />
            JSON Web Token is an open industry standard used to share information between two entities, usually a client (like
            your app’s frontend) and a server (your app’s backend). They contain JSON objects which have the information that
            needs to be shared. Each JWT is also signed using cryptography (hashing) to ensure that the JSON contents (also known
            as JWT claims) cannot be altered by the client or a malicious party.
            <br />
            * how does it work?
            <br />
            JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards
            them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and
            send them to the client. The client then submits the JWT with every request.
          </div>
        </div>
      </div>
      <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="flush-headingThree">
          <button
            class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <FaHandPointRight className="text-yellow-400 text-2xl mr-2" /> What is the difference between javascript and NodeJS?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body py-4 px-5">
            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine
            installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming
            language.
          </div>
        </div>
      </div>
      <div class="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="flush-headingThree">
          <button
            class="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-gray-800 text-left
    bg-white
    border-0
    rounded-none
    transition
    focus:outline-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            <FaHandPointRight className="text-yellow-400 text-2xl mr-2" /> How does NodeJS handle multiple requests at the same
            time?
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body py-4 px-5">
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of
            event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes
            them.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
