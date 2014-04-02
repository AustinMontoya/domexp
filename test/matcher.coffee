expect = require('chai').expect
jQuery = require 'jquery'
match = require '../matcher'

describe 'matcher', =>
	result = null
	html = '<div class="foo-container" id="foo">
						<span data-custom="baz" class="foo-item">Hello</span>
						<span class="foo-item bar-item">Goodbye</span>
					</div>'

	describe 'should', => 
		beforeEach (done) =>
			match '.foo-container .foo-item.bar-item', html, (matches) =>
				result = matches
				done()
				return

		it 'find an element by selector', =>
			expect(result).to.exist

		it 'find the correct element', =>
			expect(result.text()).to.equal "Goodbye"

	describe 'should not', =>
		it 'find an element that doesn\'t exist', =>
			match '.bar-container', html, (matches) =>
				expect(matches.length).to.equal 0