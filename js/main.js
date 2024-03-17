"use strict"; document.addEventListener("DOMContentLoaded", (function () {
  var e = document.querySelectorAll(".sub-menu__arrow"); e && e.forEach((function (e) { e.addEventListener("click", (function (e) { e.currentTarget.parentElement.classList.toggle("active") })) })); var t = document.querySelector(".page-header__burger"); t && t.addEventListener("click", (function (e) { var t = e.currentTarget, r = document.querySelector(".main-nav"); t.classList.toggle("active"), r.classList.toggle("active") })); var r = document.querySelectorAll(".video"); r && r.forEach((function (e) { e.addEventListener("click", (function (e) { var t = e.currentTarget, r = (e.target, t.querySelector(".video__preview")), o = t.querySelector(".video__button"), c = t.querySelector(".video__container"), n = t.dataset.url, a = document.createElement("iframe"); a.setAttribute("allowfullscreen", ""), a.setAttribute("allow", "autoplay"), a.setAttribute("src", n + "?rel=0&showinfo=0&autoplay=1"), a.classList.add("video__media"), r.remove(), o.remove(), c.appendChild(a) })) })); var o = document.querySelectorAll(".promocode"); o && o.forEach((function (e) { e.addEventListener("click", (function (e) { var t = e.currentTarget, r = e.target, o = t.querySelector(".promocode__button"), c = o.textContent, n = t.querySelector(".promocode__value"); if (r === o) { var a = document.createElement("textarea"); a.value = n.textContent, t.appendChild(a), a.select(), document.execCommand("copy"), a.remove(), o.textContent = "Готово", setTimeout((function () { o.textContent = c }), 3e3) } })) })); var c = document.querySelectorAll(".hide-button"); c && c.forEach((function (e) { e.addEventListener("click", (function (e) { var t = e.currentTarget; document.location.href = t.dataset.href })) })); var n = document.querySelectorAll(".faq__item"); n && n.forEach((function (e) { e.addEventListener("click", (function (e) { var t = e.currentTarget, r = e.target, o = t.querySelector(".faq__question"), c = t.querySelector(".faq__answer"); r === o && c.classList.toggle("active") })) })); var a = document.querySelectorAll(".toc"); a && a.forEach((function (e) { e.addEventListener("click", (function (e) { var t = e.currentTarget, r = t.querySelector(".toc__title"); e.target === r && t.classList.toggle("active") })) })); var u = document.querySelector(".scroll-top__button"); u && u.addEventListener("click", (function (e) { window.scrollTo({ top: 0, behavior: "smooth" }) }))

  let sfLinks = document.querySelectorAll('.sf-link');
  if (sfLinks) {
    sfLinks.forEach((el) => {
      el.addEventListener('click', function () {
        let sfLink = el.dataset.sfA;
        sfLink ? document.location.href = (atob(sfLink)) : null
      });
    });
  }

  let buttonLinks = document.querySelectorAll('.button-link');
  if (buttonLinks) {
    buttonLinks.forEach((el) => {
      el.addEventListener('click', function () {
        let link = el.dataset.sfA;
        link ? document.location.href = link : null
      });
    });
  }

   // Get the contentPopup
   let contentPopup = document.getElementsByClassName('slots-v2__popup-wrapper');

   // Get the button that opens the contentPopup
   let btn = document.getElementsByClassName("slots-v2__demolink");
 
   // Get the <span> element that closes the contentPopup
   let span = document.getElementsByClassName("slots-v2__close");
 
   // When the user clicks the button, open the contentPopup
   for (let i = 0; i < contentPopup.length; i++) {
 
     btn[i].addEventListener('click', (e) => {
       const $game = contentPopup[i]
       const $gameContainer = $game.querySelector('.game__container')
       const gameUrl = btn[i].dataset.url
 
       const isAvailableIframe = $game.querySelector('iframe');
 
       if (!isAvailableIframe) {
         let iframe = document.createElement('iframe')
         iframe.setAttribute('allowfullscreen', '')
         iframe.setAttribute('allow', 'autoplay');
         iframe.setAttribute('high', '100%');
         iframe.setAttribute('src', gameUrl);
         iframe.classList.add('game__media');
         $gameContainer.appendChild(iframe);
         
       }
     })
 
     btn[i].onclick = function () {
       contentPopup[i].style.display = "block";
     }
   }
 
   // When the user clicks on <span> (x), close the contentPopup
   for (let i = 0; i < span.length; i++) {
     span[i].onclick = function () {
       contentPopup[i].style.display = "none";
       contentPopup[i].querySelector('iframe').remove();
     }
   }
 
 
   // When the user clicks anywhere outside of the contentPopup, close it
   window.onclick = function (event) {
     if (event.target === contentPopup) {
       contentPopup.style.display = "none";
     }
   }


}));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiJHN1Yk1lbnVBcnJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiJHN1Yk1lbnVBcnJvdyIsImUiLCJjdXJyZW50VGFyZ2V0IiwidG9nZ2xlIiwiJG1lbnVCdXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwiJGJ1cmdlciIsIiRtb2JpbGVNZW51IiwiY2xhc3NMaXN0IiwiJHZpZGVvcyIsImZvckVhY2giLCIkdmlkZW8iLCIkdmlkZW9QcmV2aWV3IiwidGFyZ2V0IiwiJHZpZGVvQnV0dG9uIiwidmlkZW9VcmwiLCJkYXRhc2V0IiwidXJsIiwiaWZyYW1lIiwiY3JlYXRlRWxlbWVudCIsIiR2aWRlb0NvbnRhaW5lciIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsImFwcGVuZENoaWxkIiwiJHByb21vY29kZXMiLCIkcHJvbW9jb2RlIiwiJHRhcmdldCIsIiRwcm9tb2NvZGVCdXR0b24iLCIkaXRlbSIsInRleHRDb250ZW50IiwiJHByb21vY29kZUJ1dHRvblRleHQiLCIkcHJvbW9jb2RlQ29udGVudCIsInRtcCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIiwiJGhpZGVCdXR0b25zIiwiJGJ1dHRvbiIsImhyZWYiLCIkZmFxSXRlbXMiLCIkZmFxSXRlbSIsIiRmYXFBbnN3ZXIiLCIkZmFxUXVlc3Rpb24iLCIkdG9jIiwiJHRvY1RpdGxlIiwiJHNjcm9sbFRvVG9wQnV0dG9uIiwiZXZ0IiwiYmVoYXZpb3IiXSwibWFwcGluZ3MiOiJhQUFBQSxTQUFTQyxpQkFBaUIsb0JBQW9CLFdBQzFDLElBQU1DLEVBQWlCRixTQUFTRyxpQkFBaUIsb0JBRDdDRCxHQUNFQSxFQUFpQkYsU0FBUSxTQUFDRyxHQUd4QkMsRUFBY0gsaUJBQWlCLFNBQVMsU0FBQ0ksR0FGN0JBLEVBQUFDLGNBQ1FGLGNBQ05ILFVBQWlCTSxPQUEvQixnQkFLSCxJQU5EQyxFQUFBUixTQUFBUyxjQUFBLHdCQU9IRCxHQUlHQSxFQUFZUCxpQkFBaUIsU0FBUyxTQUFDSSxHQUZyQ0csSUFBV0UsRUFBV0wsRUFBQ0ksY0FJZkUsRUFBY1gsU0FBU1MsY0FBYyxhQUgvQ0QsRUFBYUksVUFBQUwsT0FBQSxVQUNiQyxFQUFZUCxVQUFpQk0sT0FBN0IsYUFJSUksSUFBQUEsRUFBWUMsU0FBVUwsaUJBQXRCLFVBSkpNLEdBTUhBLEVBQUFDLFNBQUEsU0FBQUMsR0FLT0EsRUFBT2QsaUJBQWlCLFNBQVMsU0FBQ0ksR0FIMUJMLElBQUFBLEVBQVNHLEVBQUFBLGNBQ1phLEdBSWVYLEVBQUVZLE9BSmpCRixFQUFBTixjQUFBLG9CQUNPUyxFQUFBSCxFQUFZTixjQUFBLGtCQUNqQlIsRUFBMEJjLEVBQUFOLGNBQU8scUJBQ3BCVSxFQUFDYixFQUFqQmMsUUFBQUMsSUFDYUMsRUFBS0wsU0FBbEJNLGNBQUEsVUFDTVAsRUFBQUEsYUFBdUJQLGtCQUFjLElBQ3JDUyxFQUFBQSxhQUFzQlQsUUFBQUEsWUFDdEJlLEVBQUFBLGFBQXdCLE1BQUNmLEVBQWMsZ0NBQ3ZDVSxFQUFXSixVQUFPSyxJQUFQLGdCQUVWSyxFQUFhQyxTQUNiRCxFQUFhQyxTQUNiRCxFQUFhRSxZQUFlTCxTQU10QyxJQWhCRE0sRUFBQTVCLFNBQUFHLGlCQUFBLGNBREp5QixHQW1CSEEsRUFBQWQsU0FBQSxTQUFBZSxHQUtPQSxFQUFXNUIsaUJBQWlCLFNBQVMsU0FBQ0ksR0FIeEN1QixJQUFjNUIsRUFBU0csRUFBQUEsY0FLWDJCLEVBQVV6QixFQUFFWSxPQUpiYyxFQUFBQyxFQUFBdkIsY0FBQSxzQkFDREssRUFBUWlCLEVBQWdCRSxZQUNyQmhDLEVBQVgrQixFQUFxQ3ZCLGNBQU8scUJBRWxDcUIsR0FBT0EsSUFBYkMsRUFBQSxDQUNNQSxJQUFBQSxFQUFnQi9CLFNBQVNTLGNBQWMsWUFDdkN5QixFQUFBQSxNQUFvQkMsRUFBR0osWUFDdkJJLEVBQUFBLFlBQTBCMUIsR0FNNUIyQixFQUFJQyxTQUpHckMsU0FBSytCLFlBQWhCLFFBQ2MvQixFQUFBQSxTQUNWK0IsRUFBWUksWUFBWixTQUNNUixZQUFOLFdBQ0FJLEVBQUFFLFlBQUFDLElBQ1NJLFlBTVosSUFBQUMsRUFBQXZDLFNBQUFHLGlCQUFBLGdCQWxCTG9DLEdBREpBLEVBQUF6QixTQUFBLFNBQUEwQixHQXNCSEEsRUFBQXZDLGlCQUFBLFNBQUEsU0FBQUksR0FNVyxJQUFNbUMsRUFBVW5DLEVBQUVDLGNBSnhCaUMsU0FBZXZDLFNBQVNHLEtBQUFBLEVBQWlCaUIsUUFBQXFCLFdBSW5DLElBQUFDLEVBQWdCckMsU0FBRUMsaUJBQWxCLGNBQ0FOLEdBRkowQyxFQUFBNUIsU0FBQSxTQUFBNkIsR0FESkEsRUFBQTFDLGlCQUFBLFNBQUEsU0FBQUksR0FNSCxJQUFBc0MsRUFBQXRDLEVBQUFDLGNBT2lCVyxFQUFTWixFQUFFWSxPQUxYakIsRUFBU0csRUFBaUJNLGNBQTVDLGtCQU9rQm1DLEVBQWFELEVBQVNsQyxjQUFjLGdCQU52Q1EsSUFBQTRCLEdBQ0QvQixFQUFRRixVQUFBTCxPQUFjLGdCQWFwQyxJQUFNdUMsRUFBTzlDLFNBQVNHLGlCQUFpQixRQVAzQjJDLEdBQ0lGLEVBQUFBLFNBQVdoQyxTQUFBQSxHQUNka0MsRUFBQTdDLGlCQUFBLFNBQUEsU0FBQUksR0FQTCxJQUFBeUMsRUFBQXpDLEVBQUFDLGNBREp5QyxFQUFBRCxFQUFBckMsY0FBQSxlQVdISixFQUFBWSxTQUFBOEIsR0FTZUQsRUFBS2xDLFVBQVVMLE9BQU8sZ0JBSDFCLElBQUF5QyxFQUFlMUMsU0FBZkcsY0FBQSx1QkFDQXVDLEdBVVJBLEVBQW1CL0MsaUJBQWlCLFNBQVMsU0FBQ2dELEdBVGxDNUMsT0FBRVksU0FBVzhCLENBQ1JuQyxJQUFBQSxFQUNSc0MsU0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCAkc3ViTWVudUFycm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudV9fYXJyb3cnKVxuICAgIGlmICgkc3ViTWVudUFycm93cykge1xuICAgICAgICAkc3ViTWVudUFycm93cy5mb3JFYWNoKCgkc3ViTWVudUFycm93KSA9PiB7XG4gICAgICAgICAgICAkc3ViTWVudUFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkaXRlbSA9IGUuY3VycmVudFRhcmdldFxuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtUGFyZW50ID0gJGl0ZW0ucGFyZW50RWxlbWVudFxuICAgICAgICAgICAgICAgICRpdGVtUGFyZW50LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICRtZW51QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX19idXJnZXInKVxuICAgIGlmICgkbWVudUJ1cmdlcikge1xuICAgICAgICAkbWVudUJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYnVyZ2VyID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICBjb25zdCAkbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpXG4gICAgICAgICAgICAkYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAkbW9iaWxlTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICR2aWRlb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlkZW8nKVxuICAgIGlmICgkdmlkZW9zKSB7XG4gICAgICAgICR2aWRlb3MuZm9yRWFjaCgoJHZpZGVvKSA9PiB7XG4gICAgICAgICAgICAkdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR2aWRlbyA9IGUuY3VycmVudFRhcmdldFxuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICAgICAgICAgIGNvbnN0ICR2aWRlb1ByZXZpZXcgPSAkdmlkZW8ucXVlcnlTZWxlY3RvcignLnZpZGVvX19wcmV2aWV3JylcbiAgICAgICAgICAgICAgICBjb25zdCAkdmlkZW9CdXR0b24gPSAkdmlkZW8ucXVlcnlTZWxlY3RvcignLnZpZGVvX19idXR0b24nKVxuICAgICAgICAgICAgICAgIGNvbnN0ICR2aWRlb0NvbnRhaW5lciA9ICR2aWRlby5xdWVyeVNlbGVjdG9yKCcudmlkZW9fX2NvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9VcmwgPSAkdmlkZW8uZGF0YXNldC51cmxcbiAgICAgICAgICAgICAgICBsZXQgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICAgICAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvd2Z1bGxzY3JlZW4nLCAnJylcbiAgICAgICAgICAgICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdhbGxvdycsICdhdXRvcGxheScpO1xuICAgICAgICAgICAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHZpZGVvVXJsICsgJz9yZWw9MCZzaG93aW5mbz0wJmF1dG9wbGF5PTEnKVxuICAgICAgICAgICAgICAgIGlmcmFtZS5jbGFzc0xpc3QuYWRkKCd2aWRlb19fbWVkaWEnKVxuXG4gICAgICAgICAgICAgICAgJHZpZGVvUHJldmlldy5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICR2aWRlb0J1dHRvbi5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICR2aWRlb0NvbnRhaW5lci5hcHBlbmRDaGlsZChpZnJhbWUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICRwcm9tb2NvZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb21vY29kZScpXG4gICAgaWYgKCRwcm9tb2NvZGVzKSB7XG4gICAgICAgICRwcm9tb2NvZGVzLmZvckVhY2goKCRwcm9tb2NvZGUpID0+IHtcbiAgICAgICAgICAgICRwcm9tb2NvZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpdGVtID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb21vY29kZUJ1dHRvbiA9ICRpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9tb2NvZGVfX2J1dHRvbicpXG4gICAgICAgICAgICAgICAgY29uc3QgJHByb21vY29kZUJ1dHRvblRleHQgPSAkcHJvbW9jb2RlQnV0dG9uLnRleHRDb250ZW50XG4gICAgICAgICAgICAgICAgY29uc3QgJHByb21vY29kZUNvbnRlbnQgPSAkaXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvbW9jb2RlX192YWx1ZScpXG5cbiAgICAgICAgICAgICAgICBpZiAoJHRhcmdldCA9PT0gJHByb21vY29kZUJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICAgICAgICAgICAgICB0bXAudmFsdWUgPSAkcHJvbW9jb2RlQ29udGVudC50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgICAgICAkaXRlbS5hcHBlbmRDaGlsZCh0bXApXG4gICAgICAgICAgICAgICAgICAgIHRtcC5zZWxlY3QoKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpXG4gICAgICAgICAgICAgICAgICAgIHRtcC5yZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICAkcHJvbW9jb2RlQnV0dG9uLnRleHRDb250ZW50ID0gJ9CT0L7RgtC+0LLQvidcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvbW9jb2RlQnV0dG9uLnRleHRDb250ZW50ID0gJHByb21vY29kZUJ1dHRvblRleHRcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICRoaWRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oaWRlLWJ1dHRvbicpXG4gICAgaWYgKCRoaWRlQnV0dG9ucykge1xuICAgICAgICAkaGlkZUJ1dHRvbnMuZm9yRWFjaCgoJGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGJ1dHRvbiA9IGUuY3VycmVudFRhcmdldFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAkYnV0dG9uLmRhdGFzZXQuaHJlZlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCAkZmFxSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFxX19pdGVtJylcbiAgICBpZiAoJGZhcUl0ZW1zKSB7XG4gICAgICAgICRmYXFJdGVtcy5mb3JFYWNoKCgkZmFxSXRlbSkgPT4ge1xuICAgICAgICAgICAgJGZhcUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRmYXFJdGVtID0gZS5jdXJyZW50VGFyZ2V0XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgICAgICAgICBjb25zdCAkZmFxUXVlc3Rpb24gPSAkZmFxSXRlbS5xdWVyeVNlbGVjdG9yKCcuZmFxX19xdWVzdGlvbicpXG4gICAgICAgICAgICAgICAgY29uc3QgJGZhcUFuc3dlciA9ICRmYXFJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX2Fuc3dlcicpXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gJGZhcVF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICRmYXFBbnN3ZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0ICR0b2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9jJylcbiAgICBpZiAoJHRvYykge1xuICAgICAgICAkdG9jLmZvckVhY2goKCR0b2MpID0+IHtcbiAgICAgICAgICAgICR0b2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0b2MgPSBlLmN1cnJlbnRUYXJnZXRcbiAgICAgICAgICAgICAgICBjb25zdCAkdG9jVGl0bGUgPSAkdG9jLnF1ZXJ5U2VsZWN0b3IoJy50b2NfX3RpdGxlJylcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09ICR0b2NUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgICAkdG9jLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCAkc2Nyb2xsVG9Ub3BCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Nyb2xsLXRvcF9fYnV0dG9uJylcbiAgICBpZiAoJHNjcm9sbFRvVG9wQnV0dG9uKSB7XG4gICAgICAgICRzY3JvbGxUb1RvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59KVxuIl19
