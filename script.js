const form=document.querySelector('form');
// console.log(form);
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    /*
In JavaScript, e.preventDefault() is a method used within event handling
to stop the default behavior of an event. In your example, the submit event
is being listened for on a form. When the form is submitted, it normally 
sends the data and reloads the page. However, using e.preventDefault() inside
the event handler stops that default action (the form submission) from happening.
Explanation:
1. e represents the event object, which contains information about the event
 (like a form submission, button click, etc.).
preventDefault() is a method that prevents the browser's default behavior for the event.
In this case, it prevents the form from actually submitting and reloading the page.
Use Case:
2. You would use e.preventDefault() when you want to handle the form submission through JavaScript,
like for validating the form or submitting the data asynchronously (e.g., via AJAX), without refreshing the page.
    */
   const height=parseInt(document.querySelector('#height').value);
   const weight=parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');
   if(height === ' ' || height < 0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;

   }else if(weight === ' ' || weight < 0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`;
   }else{
    const bmi=(weight/((height*height) / 10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`;
    const guide=document.querySelector('#weight-guide');
        if(bmi < 18.6)
        {
            guide.innerHTML=`${bmi}: Under Weight`;
        }else if(bmi >= 18.6 && bmi <= 24.9 )
        {
            guide.innerHTML=`${bmi}: Normal Range`;
        }else{
            guide.innerHTML=`${bmi}: Overweight`;
        }

   }

});
