const InfoPanel = () => {
  const html = `<div class="InfoPanel-root"><div class="InfoPanel-exchangeRates"><div class="ExchangeRates-root"><div class="ExchangeRates-item ExchangeRates-usd">74,42</div><div class="ExchangeRates-item ExchangeRates-eur">87,60</div><div class="ExchangeRates-item ExchangeRates-brent"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-root" width="9" height="12" viewBox="0 0 9 12"><g fill="#999" fill-rule="nonzero"><path d="M4.332 0l.528.606c2.528 2.902 3.804 5.07 3.804 6.634A4.332 4.332 0 110 7.24C0 5.676 1.276 3.508 3.804.606L4.332 0zm0 2.143l-.176.212C2.313 4.589 1.4 6.248 1.4 7.24a2.932 2.932 0 105.864 0c0-.992-.914-2.651-2.756-4.885l-.176-.212z"></path><path d="M2.973 7.475c0 .415.417.863.835.924l.097.008v.7c-.79 0-1.548-.716-1.626-1.5l-.006-.132h.7z"></path></g> </svg>43,68</div></div></div><div class="InfoPanel-informer"><div class="Informer-root"><span class="Informer-icon"><img src="https://meduza.io/image/attachments/images/005/211/772/original/inKlm1QyMPPlZHz-od8_lQ.png" alt="icon" width="15" height="15" role="presentation"></span><span class="Informer-text">ПРЯМОЙ ЭФИР</span></div></div><div class="InfoPanel-switcher"><label class="Switcher-root" for="id1596422774615"><div class="Switcher-children Switcher-left"><span>Популярные</span></div><input class="Switcher-input" id="id1596422774615" type="checkbox"><span class="Switcher-control"><span class="Switcher-knob"></span></span></label></div></div>`
  
  return (
    <div dangerouslySetInnerHTML={{__html: html}}></div>
  )
}

export default InfoPanel
