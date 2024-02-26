<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use DB;

use Google\Cloud\Dialogflow\V2\SessionsClient;
use Google\Cloud\Dialogflow\V2\QueryInput;
use Google\Cloud\Dialogflow\V2\TextInput;
use Google\Cloud\Dialogflow\V2\IntentsClient;

class DialogflowController extends Controller
{
    //
    public function handleWebhook(Request $request)
    {
        $projectId = 'sismedicbot-99pa'; // Reemplaza con tu ID de proyecto Dialogflow
        $sessionId = 'guest_' . uniqid(); // Puedes generar un ID de sesión único para cada usuario
        $intentDisplayName = 'SYSMEDICAPPBOT'; // Reemplaza con el nombre de tu intent en Dialogflow

        $text = $request->input('query'); // Obtén la consulta del usuario desde la solicitud

        $sessionClient = new SessionsClient([
            'credentials' => './Credentials/sismedicbot-99pa-0d5d7d32f5dc.json', // Reemplaza con la ruta a tu archivo JSON de credenciales
        ]);

        $session = $sessionClient->sessionName($projectId, $sessionId);

        $intentsClient = new IntentsClient([
            'credentials' => './Credentials/sismedicbot-99pa-0d5d7d32f5dc.json', // Reemplaza con la ruta a tu archivo JSON de credenciales
        ]);

        // Encuentra el intent con el nombre de visualización especificado
        $projectAgentName = $intentsClient->projectAgentName($projectId);
        $intents = $intentsClient->listIntents($projectAgentName);

        $selectedIntent = null;
        foreach ($intents->iterateAllElements() as $intent) {
            if ($intent->getDisplayName() === $intentDisplayName) {
                $selectedIntent = $intent;
                break;
            }
        }

        if (!$selectedIntent) {
            return response()->json(['fulfillmentText' => 'Intent no encontrado']);
        }

        // Crea una instancia de QueryInput con la consulta de texto
        $textInput = new TextInput();
        $textInput->setText($text);
        $textInput->setLanguageCode('es'); // Reemplaza con el código de idioma adecuado

        $queryInput = new QueryInput();
        $queryInput->setText($textInput);
        // Realiza la solicitud a Dialogflow
        //$response = $sessionClient->detectIntent($session, $queryInput, ['intentId' => $selectedIntent->getName()]);
        $response = $sessionClient->detectIntent($session, $queryInput, ['intentName' => $selectedIntent->getIntentName()]);
        dd($response);
        // Obtiene la respuesta de Dialogflow
        $result = $response->getQueryResult();
        $fulfillmentText = $result->getFulfillmentText();

        // Puedes hacer lo que desees con $fulfillmentText, como mostrarlo al usuario o realizar acciones adicionales

        // Envía la respuesta de vuelta a Dialogflow
        return response()->json(['fulfillmentText' => $fulfillmentText]);
    }

    public function handleWebhookDialog(Request $request)
    {
        // Loguea la solicitud para fines de depuración
        Log::info('Dialogflow Request headers: ' . json_encode($request->headers->all()));
        Log::info('Dialogflow Request body: ' . json_encode($request->all()));
        // Obtén los datos necesarios de la solicitud
        $query = $request->input('query');
        $parameters = $request->input('parameters');

        // Realiza el procesamiento necesario con los datos de Dialogflow
        

        // Devuelve una respuesta
        return response()->json(['fulfillmentText' => 'Tiene una cita Jueves 29 a las 8:40']);
    }

    public function devConsultaCitaMedica(Request $request)
    {
        
    }
}
