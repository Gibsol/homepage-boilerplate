import React from "react";
import "./Socials.css";

export default function Socials() {
  return (
    <div id="social-media" className="row">
      <ul>
        <a href="#">
          <li class="youtube">
            <i class="fa fa-youtube" aria-hidden="true"></i>
            <div class="slider">
              <p>youtube</p>
            </div>
          </li>
        </a>
        <a href="#">
          <li class="twitch">
            <i class="fa fa-twitch" aria-hidden="true"></i>
            <div class="slider">
              <p>twitch</p>
            </div>
          </li>
        </a>
        <a href="#">
          <li class="twitter">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <div class="slider">
              <p>twitter</p>
            </div>
          </li>
        </a>
        <a href="#">
          <li class="github">
            <i class="fa fa-github" aria-hidden="true"></i>
            <div class="slider">
              <p>github</p>
            </div>
          </li>
        </a>
      </ul>
    </div>
  );
}
