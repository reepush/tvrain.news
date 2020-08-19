import axios from 'axios'
import cheerio from 'cheerio'

export default async (req, res) => {
  let all, popular
  
  await axios
    .get('https://tvrain.ru/news/')
    .then(response => {
      const $ = cheerio.load(response.data)
  
      all = $('.newsline__row:not(.newsline__row--push)').get()
        .map(item => ({
          time: $(item).find('.newsline_date__time').text().trim(),
          image: $(item).find('img').attr('data-image'),
          title: $(item).find('.newsline_tile__headTitle').text().trim(),
        }))
    })
    
  await axios
    .get('https://tvrain.ru/')
    .then(response => {
      const $ = cheerio.load(response.data)
      
      $('.article-tiles__group:not(.article-tiles__group--banner)').slice(9).remove()
      $('.right-col').remove()
      
      popular = [
        ...$('a.mainNews__item').get()
          .map(item => ({
            url: 'https://tvrain.ru' + $(item).attr('href'),
            title: $(item).find('.mainNews__item__title').text().trim(),
            date: $(item).find('.mainNews__item__date').text().trim().replace(/\t/g, ' ').replace(/ +/, ' '),
          }))
      ]
      
      popular = [
        ...popular,
        ...$('a.article__info__name').get()
          .map(item => ({
            url: 'https://tvrain.ru' + $(item).attr('href'),
            title: $(item).text().trim(),
            date: $(item).parent().find('.meta__item--text').text().trim(),
            image: $(item).parent().parent().find('.article__image__img').attr('data-image'),
          }))
      ]
    })
    
  res.json({ all, popular })
}
