from flask import Flask, render_template, url_for, request, redirect, jsonify


app = Flask(__name__)


@app.route('/')
def home():
	return render_template('index.html', dagger_skill=0, sword_skill=0)

@app.route('/skillUp', methods=['GET', 'POST'])
def skillUpDagger():
	skill = request.args.get('skill')
	level = int(request.args.get('level'))

	level += 1
	return jsonify(dagger_skill=level)




if __name__ == '__main__':
	app.run(debug=True)