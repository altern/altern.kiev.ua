#!/usr/bin/python

from xml.dom.minidom import parse
import json, glob, os

def getNode(parentNode) : 
	node = {'id': "", 'name': '', 'data': {'items': [], 'description': ''}, "children": []}
	node['name'] = parentNode.getAttribute('TEXT')
	node['id'] = parentNode.getAttribute('ID')
	global tabNumber
	#if node['name'] != "" :
		#print "\t" * tabNumber + node['name']
	tabNumber = tabNumber + 1
	for childNode in parentNode.childNodes : 
		if childNode.nodeName == "node" :
			extractedNode = getNode(childNode)
			node['children'].append(extractedNode)
		elif childNode.nodeName == "attribute" :
			if childNode.getAttribute('NAME') == 'item' :
				node['data']['items'].append(childNode.getAttribute('VALUE'))
			elif childNode.getAttribute('NAME') == 'description' :
				node['data']['description'] = childNode.getAttribute('VALUE')
	tabNumber = tabNumber - 1
	return node

print "This script converts freemind mindmap xml file into json datafile for the purpose of usage with infovis\n"

basedir = os.path.join("..", "mindmaps")
files = glob.glob(os.path.join(basedir, "*.mm"));
for file in files:
	dom = parse(file)
	pathbasename, ext = os.path.splitext(file)
	fullfilename = os.path.basename(pathbasename)
	filename, lang = fullfilename.split(".")
	targetFilename = ''.join([fullfilename, '.json'])
	targetFile = os.path.join(basedir, targetFilename)
	jsonFile = open(targetFile, 'w')
	tabNumber = 0
	jsonObj = getNode(dom.getElementsByTagName('map')[0].getElementsByTagName('node')[0])
	json.dump(jsonObj, jsonFile)
	print "File ", os.path.basename(file)," has been successfully converted into ",targetFilename,"\n"

