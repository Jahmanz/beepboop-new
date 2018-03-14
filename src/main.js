import { beepBoop } from './beepboop';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $("form#beepboopForm").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    var result = beepBoop(number);



    if (!result) {
      $(".beep").append(" beep");
    } if (result === true) {
      $(".boop").append(" boop");
    }

    $("#result").show();
  });
});
