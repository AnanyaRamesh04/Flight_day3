import Flight from "../model/flightModel.js"

export const createFlight = async  (req,res) => {
    try{
    const flightData = new Flight(req.body)
    if(!flightData){
        return removeEventListener.status(404).json({msg: "Flight data not found"});
    }
    await flightData.save();
    res.status(200).json({msg: "Successfully created Flight"});
    }
    catch(error){
        res.status(500).json({error:error.message});

    }
}

export const getAllFlights = async (req,res) => {

    try{

    const flightData = await Flight.find()
    if(!flightData){ return res.status(404).json({msg:"flight data not found"});}
    res.status(200).json(flightData);
    }

    catch(error){
        res.status(500).json({error:error.message})
    }
}

export const updateFlight = async (req, res) => {
    try {
      const id =req.params.id;
      const flightData =await Flight.findByIdAndUpdate(id.req.body,{new:true});
      if (!flightDataightData) {
        return res.status(404).json({ msg: "flight data not found" });
      }
      res.status(200).json(flightData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteFlight = async (req, res) => {
    try {
        const id = req.params.id;
        const flightData = await Flight.findById(id);
        if (!flightData) {
            return res.status(404).json({ msg: "Flight data not found" });
        }
        const deleteData = await Flight.findByIdAnddelete(id,req.body, {newtrue});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
