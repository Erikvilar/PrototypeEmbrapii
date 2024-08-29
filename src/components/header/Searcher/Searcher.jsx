import scss from './Searcher.module.scss'
function searcher (props){
	return (
	  <div className={scss.searcher}>
	  <form onFocus={props.open}>
		{props.dropdown}
		  <input  type="text" name="input" id="" list={props.list}  placeholder={props.placeholder} onInput={props.event} />
		  <button disabled>    
			  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHEePkZkkWtaiJ2Bm0KvWGCk6ZWLLMOtn2Q&s" alt="" width={20}/>
		  </button>
	  </form>
	  </div>
	)
  }
  export default searcher
  