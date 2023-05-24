/*
 * SPDX-License-Identifier: Apache-2.0
 * Copyright (C) 2021 Raspberry Pi Ltd
 */

import QtQuick 2.15
import QtQuick.Controls 2.2
import QtQuick.Layouts 1.0
import QtQuick.Controls.Material 2.2
import "qmlcomponents"

Popup {
    id: popup
    x: (parent.width-width)/2
    y: (parent.height-height)/2
    //width: popupbody.implicitWidth+60
    //height: parent.height-20
    width: parent.width-150
    height: popupbody.implicitHeight+150
    padding: 0
    closePolicy: Popup.CloseOnEscape | Popup.CloseOnPressOutside
    
    property bool initialized: false
    property string config

    // background of title
    Rectangle {
        color: "#f5f5f5"
        anchors.right: parent.right
        anchors.top: parent.top
        height: 35
        width: parent.width
    }
    // line under title
    Rectangle {
        color: "#afafaf"
        width: parent.width
        y: 35
        implicitHeight: 1
    }

    Text {
        id: msgx
        text: "X"
        anchors.right: parent.right
        anchors.top: parent.top
        anchors.rightMargin: 25
        anchors.topMargin: 10
        font.family: roboto.name
        font.bold: true

        MouseArea {
            anchors.fill: parent
            cursorShape: Qt.PointingHandCursor
            onClicked: {
                initialized = false
                popup.close()
            }
        }
    }

    ColumnLayout {
        spacing: 20
        anchors.fill: parent

        Text {
            id: popupheader
            horizontalAlignment: Text.AlignHCenter
            verticalAlignment: Text.AlignVCenter
            Layout.fillWidth: true
            Layout.topMargin: 10
            font.family: roboto.name
            font.bold: true
            text: qsTr("Use Custom IMG URL")
        }
        
        ColumnLayout {
            id: popupbody
            enabled: true
            Layout.leftMargin: 40
            spacing: -5

            Text {
                text: qsTr("IMG URL:")
                color: "black"
            }
            TextField {
                id: imgUrl
                placeholderText: "https://example.com/rpios.img"
                Layout.minimumWidth: 200
                property bool indicateError: false

                onTextEdited: {
                    indicateError = false
                }
            }
        }

        RowLayout {
            Layout.alignment: Qt.AlignCenter | Qt.AlignBottom
            Layout.bottomMargin: 10
            spacing: 20

            ImButton {
                text: qsTr("CONTINUE")
                onClicked: {
                    if (imgUrl.text.length == 0)
                    {
                        imgUrl.indicateError = true
                        imgUrl.forceActiveFocus()
                        return
                    }

		    //infoBox(imgUrl.text)
                    imageWriter.setSrc(imgUrl.text)
                    osbutton.text = imageWriter.srcFileName()
                    if (imageWriter.readyToWrite()) {
                        writebutton.enabled = true
                    }
                    popup.close()
                    ospopup.close()
                }
                Material.foreground: activeFocus ? "#d1dcfb" : "#ffffff"
                Material.background: "#c51a4a"
            }

            Text { text: " " }
        }
    }

    function initialize() {
        initialized = true
    }

    function openPopup() {
        if (!initialized) {
            initialize()
        }

        open()
        popupbody.forceActiveFocus()
    }
}
