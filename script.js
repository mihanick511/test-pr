'use strict'
class Todo {
	constructor()
	{
		this.addBtn = document.querySelector('._add')
		this.todoVal = document.querySelector('._val')
		this.todoList = document.querySelector('._list')
	}
	init()
	{
		this.addBtn.addEventListener('click',()=>
		{
			if(!this.todoVal.value) return;
			this.create()
			this.reset()
		})
	}
	create()
	{
		this.filling('li','todo__item _item',this.todoList)
		let itms = this.todoList.querySelectorAll('._item')
		itms.forEach((el,index)=>
		{
			if(el.querySelector('._close')) return;
			this.filling('span','todo__text _text',el)
			this.filling('div','_close todo__close',el)	
			this.addedInfo(el.querySelector('._text'), this.todoVal.value)
			this.addEvents(el.querySelector('._close'),this.delete)
			this.addEvents(el,this.done)
		})
	}
	delete(el)
	{
		el.closest('._item').remove()
	}
	done(el)
	{
		el.classList.add('active')
	}
	filling(tagName, className, parent)
	{
		let tag = document.createElement(tagName)
		tag.className = className
		parent.appendChild(tag)		
	}
	addedInfo(tag, val)
	{
		tag.innerHTML = val
	}
	addEvents(element, callBack)
	{
		element.addEventListener('click',()=>
		{
			callBack(element)
		})
	}
	reset()
	{
		this.todoVal.value = ''
	}
}
const todo = new Todo
todo.init()



class QuryList {
	constructor()
	{
		this.queryBtn = document.querySelector('._queryBtn')
		this.querylist = document.querySelector('._queryList')
		this.data = []
	}
	init()
	{
		this.queryBtn.addEventListener('click', ()=>
		{
			this.send()
		})
	}
	send()
	{
		let div
		this.data = fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json =>
		{
			json.forEach((el,index)=>
			{
				div = document.createElement('div')
				this.querylist.appendChild(div)
				div.innerText = el.name
				div.addEventListener('click', ()=>
				{
					this.routes(el)
				})
			})
		})
	}
	routes(data)
	{
		let a = localStorage.setItem('test', data.name);
		window.location.href = 'detail.html'
		// setTimeout(()=>
		// {
		// 	document.querySelector('.test').innerText = localStorage.getItem('test');
		// },0)
		
		
	}
}
const quryList = new QuryList
quryList.init()

