

class Project{
	lang='en'
	name=''
	chinese_name=''
	english_name=''
	param=''
	fileNames=[]
	constructor(english_name, chinese_name, param,fileNames){
		this.english_name = english_name
		this.chinese_name = chinese_name
		this.name = english_name
		this.param = param
		this.trimPath(fileNames, "/static/media/")
		console.log(this.fileNames)

	}

	switchLang(){
		if(this.lang==='cn'){
			this.lang ='en'
			this.name = this.english_name
		}else{
			this.lang='cn'
			this.name = this.chinese_name
		}
	}
	static importAll(r) {
        	return r.keys().map(r);
	}

	trimPath(arr, prefix){
		this.fileNames = arr.map((file)=>{
			file = file.slice(prefix.length)
			var index = file.indexOf('.')
			//console.log(file.slice(0, index))
			return file.slice(0, index) + file.slice(index+9,file.length)
			})

	}


    // getDir(){
    // 	switch(this.param){
    // 	case: 'besiged-fortress'

    // 	return this.importAll(require.context(this.getDir, false, /\.(png|jpg|svg)$/))

    // }
    // }


}



// new Project('On-Going-2020','2020没结束','on-going-2020',Project.importAll(require.context('../public/content', false, /\.(png|jpg|svg)$/))),

const project_names = [ 
						new Project('Singular Island','独岛','singular-island',Project.importAll(require.context('../public/content/singular-island', false, /\.(png|jpg|svg)$/))),
						new Project('Dancing On Their Own','他们的舞','dancing-on-their-own', Project.importAll(require.context('../public/content/dancing-on-their-own', false, /\.(png|jpg|svg)$/))),
						new Project('Exhibition','展览','exhibition',Project.importAll(require.context('../public/content/exhibition', false, /\.(png|jpg|svg)$/))),
						new Project('Apart Again','分开','apart-again',Project.importAll(require.context('../public/content/apart-again', false, /\.(png|jpg|svg)$/))),
]

export default project_names;