# BuzzAnswers

I wondered how Buzzfeed tallied up their quiz scores to you an answer. While poking around I figured out a way to display all of the answers. Here is a bookmarketlet I created that shows you all of the possible answers to a quiz. It's fun to use after you've already answered a quiz.

## 3 ways to use:

##### 1. Recommended: Paste in Address Bar
Visit a Buzzfeed Quiz and paste the following code into your browser's address bar. Inevitably the beginning part of the code that says *javascript:* will be removed so after pasting you will have to retype **javascript:**

```
javascript:;(function() {var results=document.querySelectorAll(".quiz_result_area, .quiz_tally_results, .quiz_result");for(var i=0;i<results.length;i++){console.log(results[i]);var newSrc = results[i].getElementsByClassName("quiz_img_and_source")[0].querySelectorAll('img.result_img')[0].getAttribute('data:src');results[i].getElementsByClassName("quiz_img_and_source")[0].querySelectorAll('img.result_img')[0].setAttribute("src", newSrc);if(results[i].style){results[i].style.display="block"}}document.querySelector(".quiz_result_area").id="quiz_results";window.location.hash="quiz_results";}());
```

##### 2. Create Bookmarketlet
Create a new bookmark for ANY website or webpage. *Edit the bookmark.* Replace the bookmark URL with that same code above. Name it BuzzAnswers. 


##### 3. Paste in Console

Visit your favorite Buzzfeed quiz. Right click on the page. Click *inspect* or *inspect element*. A DevTools menu will appear at the bottom of the page. Click on the **Console Tab**. Paste. Profit.
