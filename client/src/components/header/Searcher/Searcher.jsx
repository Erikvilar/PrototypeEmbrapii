import scss from './Searcher.module.scss'
function searcher (props){
	return (
	  <div className={scss.searcher}>
	  <form onFocus={props.open}>
		{props.dropdown}
		  <input  type="text"  id="Personalizado" list={props.list}   placeholder={props.placeholder} onChange={props.event} maxLength={20}/>
		  <button disabled>    
			  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHEePkZkkWtaiJ2Bm0KvWGCk6ZWLLMOtn2Q&s" alt="" width={20}/>
		  </button>
	  </form>
	  </div>
	)
  }
  export default searcher
  