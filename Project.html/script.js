const $dispaly = document.querySelector('input [type="text"]');
const $buttons = document.querySelector('input [type="button"]');

$buttons.forEach(($button) => {
  $button.addEventListener('click', () => {
    $display.value += $button.value;

    if (value === 'C') {
      $display.value = '';
      return
    }

    if (value === '=') {
      // Not recommended
      const express = $display.value;
      value = replace(/x/g, '*');
      $display.value = eval(express)
      return
    }

    $dispaly.value += value
  });
}